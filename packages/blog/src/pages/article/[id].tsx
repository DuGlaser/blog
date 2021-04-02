import { Article } from '@blog/core';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { ArticleContent } from '@/components/molecules/ArticleContent';
import { Layout } from '@/components/templates';

import articles from '.contents/articles.json';

type Props = {
  article: Article;
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = params?.id as string;
  const article = articles.find((article) => article.id === id);

  if (!article) throw 'Not found article';

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articleIdList = articles.map((article) => article.id);
  const paths = articleIdList.map((id) => {
    return {
      params: {
        id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

const ArticlePage: NextPage<Props> = ({ article }) => {
  return (
    <Layout>
      <ArticleContent article={article} />
    </Layout>
  );
};

export default ArticlePage;
