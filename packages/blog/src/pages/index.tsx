import { Article } from '@blog/core';
import styled from '@emotion/styled';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import { ArticleCard } from '@/components/molecules';
import { Layout } from '@/components/templates/Layout';
import { getAllArticles } from '@/lib/article';

const S = {
  ArticleWrapper: styled.div`
    & + & {
      margin-top: 2rem;
    }
  `,
  ArticleAnchor: styled.a`
    text-decoration: none;
  `,
};

type Props = {
  articles: Article[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const articles = await getAllArticles();

    return {
      props: {
        articles,
      },
      revalidate: 60 * 10,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

const IndexPage: NextPage<Props> = ({ articles }) => {
  return (
    <Layout>
      {articles.map((article) => (
        <S.ArticleWrapper key={`article-card-${article.id}`}>
          <Link href={`/articles/${article.id}`}>
            <S.ArticleAnchor>
              <ArticleCard article={article} />
            </S.ArticleAnchor>
          </Link>
        </S.ArticleWrapper>
      ))}
    </Layout>
  );
};

export default IndexPage;
