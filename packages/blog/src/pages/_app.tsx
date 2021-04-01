import 'modern-css-reset';

import { ThemeProvider } from '@emotion/react';

import { theme } from '@/utils/theme';

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        body {
          background-color: ${theme.color.bgColor};
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
