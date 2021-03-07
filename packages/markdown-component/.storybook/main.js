module.exports = {
  stories: ['../components/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: { reactDocgen: 'react-docgen' },
  webpackFinal: (config) => {
    config.resolve.modules.push(process.cwd() + '/node_modules');
    config.resolve.modules.push(process.cwd() + '/components');

    config.resolve.symlinks = false;
    return config;
  },
};
