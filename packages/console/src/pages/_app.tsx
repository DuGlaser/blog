import 'modern-css-reset';

import initAuth from '@/utils/initAuth';
import { ThemeProvider } from '@emotion/react';
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
