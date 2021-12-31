const custom = require('../config/webpack.common');

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "webpack5"
  }, 
  webpackFinal: async (config) => {
    return { ...config, module: { ...config.module, rules: custom.module.rules } };
  },
};