export type Article = {
  id: string;
  public: boolean;
  title: string;
  description: string;
  body: string;
  tags: string[];
  updated_at: number | string;
  created_at: number | string;
};

export type FirestoreArticle = Omit<Article, 'id'>;
