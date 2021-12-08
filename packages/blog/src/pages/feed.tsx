import { GetServerSideProps } from 'next';
import RSS from 'rss';
import { config } from 'site.config';
import urljoin from 'url-join';

import { getAllArticles } from '@/lib/article';

async function generateFeedXml() {
  const feed = new RSS({
    title: config.site.title,
    description: config.site.description,
    site_url: config.site.url,
    feed_url: urljoin(config.site.url, '/feed'),
    language: 'ja',
  });

  const articles = await getAllArticles();
  articles.forEach((article) => {
    feed.item({
      title: article.title,
      description: article.description,
      date: new Date(article.created_at),
      url: urljoin(config.site.url, 'articles', article.id),
    });
  });

  return feed.xml();
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const xml = await generateFeedXml();

  res.statusCode = 200;
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  res.setHeader('Content-Type', 'text/xml');
  res.end(xml);

  return {
    props: {},
  };
};

const Page = () => null;
export default Page;
