import styled from '@emotion/styled';
import { NextPage } from 'next';
import Link from 'next/link';

import { ArticleCard } from '@/components/molecules';
import { Layout } from '@/components/templates/Layout';

import articles from '.contents/articles.json';

const S = {
  ArticleAnchor: styled.a`
    text-decoration: none;
  `,
};

const IndexPage: NextPage = () => {
  return (
    <Layout>
      {articles.map((article) => (
        <Link
          key={`article-card-${article.id}`}
          href={`/article/${article.id}`}
        >
          <S.ArticleAnchor>
            <ArticleCard article={article} />
          </S.ArticleAnchor>
        </Link>
      ))}
    </Layout>
  );
};

export default IndexPage;
