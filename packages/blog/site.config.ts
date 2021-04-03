export const config = {
  siteUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://duglaser.dev'
      : 'http://localhost:3000',
};
