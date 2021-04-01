import 'firebase/firestore';

import { FirestoreArticle } from '@blog/core';
import { useState } from 'react';

import firebase from '@/utils/firebase';

export const useSaveArticle = (id = '') => {
  const [docId, setDocId] = useState(id);

  const handleSave = async (article: Partial<FirestoreArticle>) => {
    const db = firebase.firestore();
    const now = Date.now();

    if (docId) {
      article.updated_at = now;

      const ref = db.collection('articles').doc(docId);
      await ref.set(article, { merge: true });
    } else {
      article.updated_at = now;
      article.created_at = now;

      const ref = await db.collection('articles').add(article);
      setDocId(ref.id);
    }
  };

  return handleSave;
};
