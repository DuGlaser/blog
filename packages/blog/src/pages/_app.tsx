import 'modern-css-reset';

import { ThemeProvider } from '@emotion/react';

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
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
