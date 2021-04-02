import { Layout } from '@/components/templates/Layout';
import articles from '.contents/articles.json';
import { NextPage } from 'next';
import { ArticleCard } from '@/components/molecules';
import Link from 'next/link';
import styled from '@emotion/styled';

const S = {
  ArticleAnchor: styled.a`
    text-decoration: none;
  `,
};

const IndexPage: NextPage = () => {
  return (
    <Layout>
      {articles.map((article) => (
        <Link href={`/article/${article.id}`}>
          <S.ArticleAnchor>
            <ArticleCard article={article} />
          </S.ArticleAnchor>
        </Link>
      ))}
    </Layout>
  );
};

export default IndexPage;
