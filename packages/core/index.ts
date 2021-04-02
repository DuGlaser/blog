export type Article = {
  id: string;
  public: boolean;
  title: string;
  body: string;
  tags: string[];
  updated_at: number;
  created_at: number;
};

export type FirestoreArticle = Omit<Article, 'id'>;
