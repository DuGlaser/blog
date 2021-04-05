import styled from '@emotion/styled';
import { NextPage } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { config } from 'site.config';

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
      <NextSeo
        title={config.site.title}
        description={config.site.description}
        canonical={config.site.url}
        openGraph={{
          title: config.site.title,
          type: 'blog',
          url: config.site.url,
          description: config.site.description,
          site_name: config.site.title,
        }}
        twitter={{
          handle: `@${config.twitter.id}`,
          site: `@${config.twitter.id}`,
          cardType: 'summary_large_image',
        }}
      />
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
