import { Article, FirestoreArticle } from '@blog/core';
import { useTheme } from '@emotion/react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useReducer, useRef, useState } from 'react';
import { useStopTyping } from 'use-stop-typing';

import {
  FlatButton,
  FloatingWindow,
  OutlineButton,
  TextFilled,
} from '@/components/atoms';
import { Editor, Preview, SelectTagBox } from '@/components/molecules';
import { useSaveArticle } from '@/hooks';

import * as S from './style';

export type Props = {
  article?: Article;
};

type State = Omit<FirestoreArticle, 'updated_at' | 'created_at'>;

enum ActionType {
  UPDATE_BODY = 'UPDATE_BODY',
  UPDATE_TITLE = 'UPDATE_TITLE',
  UPDATE_TAGS = 'UPDATE_TAGS',
  TOGGLE_PUBLIC = 'TOGGLE_PUBLIC',
}

type Action = {
  type: ActionType;
  payload: State;
};

type Reducer = React.Reducer<State, Action>;

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case ActionType.UPDATE_BODY:
      return {
        ...state,
        body: action.payload.body,
      };

    case ActionType.UPDATE_TITLE:
      return {
        ...state,
        title: action.payload.title,
      };

    case ActionType.UPDATE_TAGS:
      return {
        ...state,
        tags: action.payload.tags,
      };

    case ActionType.TOGGLE_PUBLIC:
      return {
        ...state,
        public: !state.public,
      };

    default:
      throw new Error();
  }
};

export const ArticleEditor: React.VFC<Props> = ({
  article = {
    id: '',
    public: false,
    title: '',
    body: '',
    tags: [],
  },
}) => {
  const theme = useTheme();
  const [state, dispatch] = useReducer<Reducer>(reducer, {
    title: article.title,
    body: article.body,
    public: article.public,
    tags: article.tags,
  });

  const [isUpdate, setIsUpdate] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

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
        <Editor
          ref={editorRef}
          value={state.body}
          onChange={handleChangeBody}
        />
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
