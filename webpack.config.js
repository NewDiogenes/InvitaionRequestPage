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
    loader: 'babel-loader',
  },
  {
    test: /\.css$/,
    use: [
      { loader: 'style-loader', options: { sourceMap: true } },
      { loader: 'css-loader', options: { sourceMap: true } },
    ],
  },
  {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file-loader',
  },
];

module.exports = {
  devtool: 'source-map',
  entry: ['babel-polyfill', path.join(sourcePath, './index.js')],
  output: {
    path: buildPath,
    publicPath: '/',
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      sourcePath,
    ],
  },
  plugins,
};
