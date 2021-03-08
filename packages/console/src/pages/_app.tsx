import initAuth from '@/utils/initAuth'; // the module you created above

initAuth();

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

export default MyApp;
