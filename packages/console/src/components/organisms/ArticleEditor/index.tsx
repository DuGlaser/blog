import 'firebase/storage';

import { Article } from '@blog/core';
import { parser } from '@blog/parser';
import { useTheme } from '@emotion/react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {
  useCallback,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import { useDropzone } from 'react-dropzone';
import { useStopTyping } from 'use-stop-typing';

import {
  FlatButton,
  FloatingWindow,
  OutlineButton,
  TextFilled,
} from '@/components/atoms';
import { Editor, Preview, SelectTagBox } from '@/components/molecules';
import { useSaveArticle } from '@/hooks';
import firebase from '@/utils/firebase';
import { formatMDImage } from '@/utils/formatMDImage';

import { ActionType, Reducer, reducer } from './reducer';
import * as S from './style';

export type Props = {
  article?: Article;
};

const uploadImage = async (file: File): Promise<string> => {
  const storage = firebase
    .app()
    .storage(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_URL);
  await storage.ref(`images/${file.name}`).put(file);
  const url: string = await storage
    .ref('images')
    .child(file.name)
    .getDownloadURL();

  return url;
};

export const ArticleEditor: React.VFC<Props> = ({
  article = {
    id: '',
    public: false,
    title: '',
    body: '',
    description: '',
    tags: [],
  },
}) => {
  const theme = useTheme();
  const [state, dispatch] = useReducer<Reducer>(reducer, {
    title: article.title,
    body: article.body,
    description: article.description,
    public: article.public,
    tags: article.tags,
  });

  const { getRootProps } = useDropzone({
    noClick: true,
    accept: 'image/jpeg, image/png',
    onDrop: async (files) => {
      Promise.all(
        files.map(async (file) => {
          try {
            const url = uploadImage(file);
            return Promise.resolve<string>(url);
          } catch (error) {
            console.warn(error);
            return Promise.reject(error);
          }
        })
      ).then((data) => {
        const urlStrings = data.map((url) => formatMDImage(url)).join('\n');
        handleChangeBody(state.body + urlStrings);
      });
    },
  });

  const [isUpdate, setIsUpdate] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const formattedDescription = useMemo(() => {
    const { plainText } = parser(article.body);
    return plainText.replace(/[\n|\r|\n\r]+/g, ' ').slice(0, 116) + '...';
  }, [article.body]);

  const handleSave = useSaveArticle(article.id);
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);

  [editorRef, titleRef].map((ref) => {
    useStopTyping(
      ref,
      () => {
        handleSave({
          public: state.public,
          title: state.title,
          body: state.body,
          description: formattedDescription,
        });
        setIsUpdate(true);
        setTimeout(() => setIsUpdate(false), 2500);
      },
      2000
    );
  });

  const handleChangeBody = useCallback((value) => {
    dispatch({
      type: ActionType.UPDATE_BODY,
      payload: { ...state, body: value },
    });
  }, []);

  return (
    <S.Wrapper>
      <S.Header>
        <S.TitleWrapper>
          <TextFilled
            textColor={theme.color.white}
            placeholder={'Title'}
            fontSize={'32px'}
            value={state.title}
            onChange={(e) =>
              dispatch({
                type: ActionType.UPDATE_TITLE,
                payload: { ...state, title: e.target.value },
              })
            }
            ref={titleRef}
          />
        </S.TitleWrapper>
        <S.ButtonWrapper>
          <OutlineButton
            borderColor={theme.color.primary}
            textColor={theme.color.primary}
            onClick={() => setIsOpenModal(true)}
          >
            情報
          </OutlineButton>
          <FlatButton
            bgColor={theme.color.primary}
            textColor={theme.color.white}
            onClick={() => {
              if (confirm(`${state.public ? '非公開に' : '公開'}しますか？`)) {
                if (!(state.title && state.body)) {
                  alert('titleやbodyが入力できていません');
                  return;
                }

                handleSave({
                  public: !state.public,
                });
                dispatch({
                  type: ActionType.TOGGLE_PUBLIC,
                  payload: { ...state },
                });
              }
            }}
          >
            {state.public ? '非公開にする' : '公開する'}
          </FlatButton>
        </S.ButtonWrapper>
      </S.Header>
      <S.Content>
        <S.EditorWrapper {...getRootProps({ className: 'dropzone' })}>
          <Editor
            ref={editorRef}
            value={state.body}
            onChange={handleChangeBody}
          />
        </S.EditorWrapper>
        <S.Border />
        <Preview value={state.body} />
      </S.Content>
      <S.Modal isOpen={isOpenModal} contentLabel={'Info'}>
        <S.ModalCloseButton onClick={() => setIsOpenModal(false)}>
          <FontAwesomeIcon icon={faTimes} color={theme.color.gray} />
        </S.ModalCloseButton>
        <S.ModalTitle>Tag</S.ModalTitle>
        <SelectTagBox
          value={state.tags}
          handleChangeValue={useCallback(
            (value) => {
              dispatch({
                type: ActionType.UPDATE_TAGS,
                payload: { ...state, tags: value },
              });
              handleSave({
                tags: value,
              });
            },
            [state, dispatch, handleSave]
          )}
        />
      </S.Modal>
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
