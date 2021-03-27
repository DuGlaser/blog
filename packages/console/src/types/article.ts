export type Article = {
  id: string;
  public: boolean;
  title: string;
  body: string;
};

export type FirestoreArticle = Omit<Article, 'id'>;
