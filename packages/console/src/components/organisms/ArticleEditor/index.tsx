import { useTheme } from '@emotion/react';
import React, { useCallback, useRef, useState } from 'react';
import { useStopTyping } from 'use-stop-typing';

import { FlatButton, OutlineButton, TextFilled } from '@/components/atoms';
import { Editor, Preview } from '@/components/molecules';
import { useSaveArticle } from '@/hooks/useSaveArticle';
import { FirestoreArticle } from '@/types/article';

import * as S from './style';

export type Props = {
  article?: FirestoreArticle;
};

export const ArticleEditor: React.VFC<Props> = ({
  article = {
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

  const handleSave = useSaveArticle();
  const ref = useRef<HTMLTextAreaElement>(null);
  useStopTyping(
    ref,
    () =>
      handleSave({
        public: isPublic,
        title: title,
        body: editor,
      }),
    2000
  );

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
          >
            {isPublic ? '非公開にする' : '公開する'}
          </FlatButton>
        </S.ButtonWrapper>
      </S.Header>
      <S.Content>
        <Editor ref={ref} value={editor} onChange={handleOnChange} />
        <S.Border />
        <Preview value={editor} />
      </S.Content>
    </S.Wrapper>
  );
};
