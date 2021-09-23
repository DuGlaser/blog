import { GetServerSideProps } from 'next';
import { config } from 'site.config';

import { getAllArticles } from '@/lib/article';

async function generateSitemapXml(): Promise<string> {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const articles = await getAllArticles();
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
