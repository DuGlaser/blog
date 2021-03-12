import 'modern-css-reset';

import initAuth from '@/utils/initAuth';

initAuth();

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

export default MyApp;
