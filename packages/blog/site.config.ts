export const config = {
  site: {
    title: '永遠にWIP',
    description: '技術ブログ系サクラダ・ファミリア',
    url:
      process.env.NODE_ENV === 'production'
        ? 'https://duglaser.dev'
        : 'http://localhost:3000',
  },
  twitter: {
    id: 'dameganeo',
  },
};
