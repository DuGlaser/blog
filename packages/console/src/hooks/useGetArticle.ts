import 'firebase/firestore';

import { Article } from '@blog/core';
import {
  useCollectionDataOnce,
  useDocumentData,
} from 'react-firebase-hooks/firestore';

import firebase from '@/utils/firebase';

export const useGetArticlesDataOnce = () => {
  return useCollectionDataOnce<Article>(
    firebase.firestore().collection('articles'),
    {
      idField: 'id',
    }
  );
};

export const useGetArticleData = (id: string) => {
  return useDocumentData<Article>(firebase.firestore().doc(`articles/${id}`), {
    idField: 'id',
  });
};
