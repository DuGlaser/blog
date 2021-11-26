module.exports = {
  experimental: {
    optimizeFonts: true,
  },
  async redirects() {
    return [
      {
        source: '/article/:path',
        destination: '/articles/:path',
        permanent: true,
      },
    ];
  },
};
