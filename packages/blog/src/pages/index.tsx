import styled from '@emotion/styled';
import { NextPage } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { config } from 'site.config';
import urljoin from 'url-join';

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
          images: [
            {
              url: urljoin(config.site.url, `/api/og?title=永遠にWIP`),
            },
          ],
        }}
        twitter={{
          handle: `@${config.twitter.id}`,
          site: `@${config.twitter.id}`,
          cardType: 'summary_large_image',
        }}
      />
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
