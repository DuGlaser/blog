import 'firebase/firestore';

import { useState } from 'react';

import { FirestoreArticle } from '@/types/article';
import firebase from '@/utils/firebase';

export const useSaveArticle = (id = '') => {
  const [docId, setDocId] = useState(id);

  const handleSave = async (article: FirestoreArticle) => {
    const db = firebase.firestore();
    if (docId) {
      const ref = db.collection('articles').doc(docId);
      await ref.set(article, { merge: true });
    } else {
      const ref = await db.collection('articles').add(article);
      setDocId(ref.id);
    }
  };

  return handleSave;
};
