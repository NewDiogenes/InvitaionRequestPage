const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildPath = path.join(__dirname, './build');
const sourcePath = path.join(__dirname, './src');

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(sourcePath, 'index.html'),
    path: buildPath,
    filename: 'index.html',
  }),
];

const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    enforce: 'pre',
    loader: 'eslint-loader',
    options: { emitWarnings: true },
  },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
];

module.exports = {
  devtool: 'source-map',
  context: sourcePath,
  entry: {
    js: './index.js',
  },
  output: {
    path: buildPath,
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules,
  },
  plugins,
};
