import { Article } from '@blog/core';

import firebase from '@/utils/firebase';
import { formatDate } from '@/utils/formatDate';

export const getAllArticles = async (): Promise<Article[]> => {
  try {
    const db = firebase.firestore();
    const res = await db
      .collection('articles')
      .where('public', '==', true)
      .get();

    const articles = res.docs
      .map((doc) => {
        return { ...doc.data(), id: doc.id } as Article;
      })
      .map((article) => {
        const createdAt = new Date(article.created_at);
        const updatedAt = new Date(article.updated_at);

        return {
          ...article,
          created_at: formatDate(createdAt),
          updated_at: formatDate(updatedAt),
        };
      })
      .sort((a, b) => b.created_at.localeCompare(a.created_at)) as Article[];

    db.terminate();
    db.clearPersistence();

    return articles;
  } catch {
    return [];
  }
};

export const getArticleById = async (
  id: string
): Promise<Article | undefined> => {
  try {
    const db = firebase.firestore();
    const res = await db.collection('articles').doc(id).get();

    if (!res) {
      return undefined;
    }

    const data = res.data() as Article;

    if (!(data && data.public)) {
      return undefined;
    }

    const createdAt = new Date(data.created_at);
    const updatedAt = new Date(data.updated_at);

    const article = {
      ...data,
      id,
      created_at: formatDate(createdAt),
      updated_at: formatDate(updatedAt),
    };

    db.terminate();
    db.clearPersistence();

    return article;
  } catch {
    return undefined;
  }
};
