const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  experimental: {
    optimizeFonts: true,
  },
  target: 'serverless',
  async redirects() {
    return [
      {
        source: '/article/:path',
        destination: '/articles/:path',
        permanent: true,
      },
    ];
  },
  webpack: function (config, { dev, isServer }) {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    if (!dev) {
      config.plugins.push(
        new CopyPlugin({
          patterns: [{ from: 'fonts', to: 'fonts' }],
        })
      );
    }

    return config;
  },
};
