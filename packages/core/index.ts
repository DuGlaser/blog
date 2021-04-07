export type Article = {
  id: string;
  public: boolean;
  title: string;
  description: string;
  body: string;
  tags: string[];
  updated_at: number;
  created_at: number;
};

export type FirestoreArticle = Omit<Article, 'id'>;
