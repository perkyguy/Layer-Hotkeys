const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  name: 'layer-hotkeys',
  entry: {
    index: './src/scripts/index.js'
  },
  mode: 'development',
  devtool: 'source-map',
  output: {
    publicPath: 'modules/layer-hotkeys/scripts/',
    filename: 'index.js',
    chunkFilename: 'bundles/[name].[chunkhash:4].js',
    path: path.resolve(__dirname, 'dist/scripts/'),
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};