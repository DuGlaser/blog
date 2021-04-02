import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import articles from '.contents/articles.json';
import { Article } from '@blog/core';
import { Layout } from '@/components/templates';
import { ArticleContent } from '@/components/molecules/ArticleContent';

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
