import 'modern-css-reset';

import { ThemeProvider } from '@emotion/react';
import { DefaultSeo } from 'next-seo';

import initAuth from '@/utils/initAuth';
import { theme } from '@/utils/theme';

initAuth();

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        body {
          background-color: ${theme.color.bgColor};
        }
      `}</style>
      <DefaultSeo
        dangerouslySetAllPagesToNoIndex={true}
        dangerouslySetAllPagesToNoFollow={true}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
