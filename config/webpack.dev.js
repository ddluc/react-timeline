// webpack.dev.js
const webpackCommon = require('./webpack.common');

module.exports = {
  ...webpackCommon,
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    port: 3232,
    open: "http://localhost:3232"
  }
};