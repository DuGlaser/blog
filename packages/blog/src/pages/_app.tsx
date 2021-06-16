import 'modern-css-reset';

import { ThemeProvider } from '@emotion/react';
import { DefaultSeo } from 'next-seo';
import { config } from 'site.config';
import urljoin from 'url-join';

import { theme } from '@/utils/theme';

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        html {
          font-size: 14px;
        }
        @media (min-width: 800px) {
          html {
            font-size: 16px;
          }
        }
        body {
          background-color: ${theme.color.bgColor};
          font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
            'Hiragino Sans', Meiryo, sans-serif;
        }
      `}</style>
      <DefaultSeo
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
        additionalLinkTags={[
          {
            rel: 'icon',
            href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🚧</text></svg>',
          },
        ]}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
