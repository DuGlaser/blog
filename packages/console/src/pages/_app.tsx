import 'modern-css-reset';

import { ThemeProvider } from '@emotion/react';

import initAuth from '@/utils/initAuth';
import { theme } from '@/utils/theme';

initAuth();

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
