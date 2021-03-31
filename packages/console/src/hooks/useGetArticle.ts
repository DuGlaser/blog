import 'firebase/firestore';

import {
  useCollectionDataOnce,
  useDocumentData,
} from 'react-firebase-hooks/firestore';

import { Article } from '@/types/article';
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
