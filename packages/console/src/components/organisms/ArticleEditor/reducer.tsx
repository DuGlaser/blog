import { FirestoreArticle } from '@blog/core';

type State = Omit<FirestoreArticle, 'updated_at' | 'created_at'>;

export enum ActionType {
  UPDATE_BODY = 'UPDATE_BODY',
  UPDATE_TITLE = 'UPDATE_TITLE',
  UPDATE_TAGS = 'UPDATE_TAGS',
  TOGGLE_PUBLIC = 'TOGGLE_PUBLIC',
}

type Action = {
  type: ActionType;
  payload: State;
};

export type Reducer = React.Reducer<State, Action>;

export const reducer: Reducer = (state, action) => {
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
