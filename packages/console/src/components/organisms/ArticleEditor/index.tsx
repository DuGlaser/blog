import { Article } from '@blog/core';
import { useTheme } from '@emotion/react';
import React, { useCallback, useRef, useState } from 'react';
import { useStopTyping } from 'use-stop-typing';

import {
  FlatButton,
  FloatingWindow,
  OutlineButton,
  TextFilled,
} from '@/components/atoms';
import { Editor, Preview } from '@/components/molecules';
import { useSaveArticle } from '@/hooks';

import * as S from './style';

export type Props = {
  article?: Article;
};

export const ArticleEditor: React.VFC<Props> = ({
  article = {
    id: '',
    public: false,
    title: '',
    body: '',
  },
}) => {
  const theme = useTheme();

  // TODO: Use reducer...etc
  const [editor, setEditor] = useState(article.body);
  const [title, setTitle] = useState(article.title);
  const [isPublic, setIsPublic] = useState(article.public);
  const [isUpdate, setIsUpdate] = useState(false);

  const handleSave = useSaveArticle(article.id);
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);

  [editorRef, titleRef].map((ref) => {
    useStopTyping(
      ref,
      () => {
        handleSave({
          public: isPublic,
          title: title,
          body: editor,
        });
        setIsUpdate(true);
        setTimeout(() => setIsUpdate(false), 2500);
      },
      2000
    );
  });

  const handleOnChange = useCallback((value) => {
    setEditor(value);
  }, []);

  return (
    <S.Wrapper>
      <S.Header>
        <S.TitleWrapper>
          <TextFilled
            textColor={theme.color.white}
            placeholder={'Title'}
            fontSize={'32px'}
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            ref={titleRef}
          />
        </S.TitleWrapper>
        <S.ButtonWrapper>
          <OutlineButton
            borderColor={theme.color.primary}
            textColor={theme.color.primary}
          >
            情報
          </OutlineButton>
          <FlatButton
            bgColor={theme.color.primary}
            textColor={theme.color.white}
            onClick={() => {
              if (confirm(`${isPublic ? '非公開に' : '公開'}しますか？`)) {
                if (!(title && editor)) {
                  alert('titleやbodyが入力できていません');
                  return;
                }

                handleSave({
                  public: !isPublic,
                  title: title,
                  body: editor,
                });
                setIsPublic((pre) => !pre);
              }
            }}
          >
            {isPublic ? '非公開にする' : '公開する'}
          </FlatButton>
        </S.ButtonWrapper>
      </S.Header>
      <S.Content>
        <Editor ref={editorRef} value={editor} onChange={handleOnChange} />
        <S.Border />
        <Preview value={editor} />
      </S.Content>
      {isUpdate && (
        <S.FloatingWindowWrapper>
          <FloatingWindow>
            <S.FloatingWindowText>
              <span role="img" aria-label="sunglasses">
                😎
              </span>{' '}
              保存しました
            </S.FloatingWindowText>
          </FloatingWindow>
        </S.FloatingWindowWrapper>
      )}
    </S.Wrapper>
  );
};
