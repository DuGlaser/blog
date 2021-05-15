import styled from '@emotion/styled';
import { NextPage } from 'next';
import Link from 'next/link';

import { ArticleCard } from '@/components/molecules';
import { Layout } from '@/components/templates/Layout';

import articles from '.contents/articles.json';

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

const IndexPage: NextPage = () => {
  return (
    <Layout>
      {articles.map((article) => (
        <S.ArticleWrapper key={`article-card-${article.id}`}>
          <Link href={`/article/${article.id}`}>
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
