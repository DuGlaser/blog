import { GetServerSideProps } from 'next';
import { config } from 'site.config';

import { getAllArticles } from '@/lib/article';

async function generateSitemapXml(): Promise<string> {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const articles = await getAllArticles();

  const latestArticle = articles.sort((a, b) => {
    const au = a.updated_at as string;
    const bu = b.updated_at as string;

    return bu.localeCompare(au);
  })[0];

  if (latestArticle) {
    xml += `
      <url>
        <loc>${config.site.url}/</loc>
        <lastmod>${latestArticle.updated_at}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
  `;
  }

  articles.forEach((article) => {
    xml += `
      <url>
        <loc>${config.site.url}/articles/${article.id}/</loc>
        <lastmod>${article.updated_at}</lastmod>
        <changefreq>daily</changefreq>
      </url>
    `;
  });

  xml += `</urlset>`;
  return xml;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const xml = await generateSitemapXml();

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
