const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpackCommon = require('./webpack.common');

module.exports = {
  ...webpackCommon,
  mode: "production",
  plugins: [
    new CleanWebpackPlugin({
      protectWebpackAssets: false,
      cleanAfterEveryBuildPatterns: ['*.LICENSE.txt'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html")
    })
  ]
};