import { Article } from '@blog/core';
import * as dotenv from 'dotenv';
import firebase from 'firebase';
import fs from 'fs-extra';

dotenv.config();

firebase.initializeApp({
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MESSAGING_SENDER_ID,
});

const main = async () => {
  const db = firebase.firestore();
  const res = await db.collection('articles').where('public', '==', true).get();

  const articles = res.docs
    .map((doc) => {
      return { ...doc.data(), id: doc.id } as Article;
    })
    .sort((a, b) => b.created_at - a.created_at) as Article[];

  db.terminate();
  db.clearPersistence();

  fs.ensureDirSync('.contents');
  fs.writeJsonSync('.contents/articles.json', articles);
};

main();
