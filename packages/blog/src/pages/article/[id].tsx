import { Article } from '@blog/core';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { config } from 'site.config';
import urljoin from 'url-join';

import { ArticleContent } from '@/components/molecules';
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
  const router = useRouter();
  const url = urljoin(config.site.url, router ? router.asPath : '');

  return (
    <Layout>
      <NextSeo
        title={article.title}
        description={article.description}
        canonical={url}
        openGraph={{
          title: article.title,
          description: article.description,
          type: 'blog',
          url: url,
          site_name: config.site.title,
          images: [
            {
              url: urljoin(config.site.url, `/api/og?title=${article.title}`),
            },
          ],
        }}
      />
      <ArticleContent article={article} />
    </Layout>
  );
};

export default ArticlePage;
