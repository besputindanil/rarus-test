const path = require('path');
const html = require('html-webpack-plugin');
const { VueLoaderPlugin: vue } = require('vue-loader');
const dotenv = require('dotenv-webpack');

const resolve = (to) => path.resolve(__dirname, to);

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve('./build'),
    publicPath: '/',
    filename: 'index.js',
  },
  devServer: {
    compress: true,
    port: 8080,
  },
  resolve: {
    alias: {
      'views': resolve('src/views'),
      'components': resolve('src/components'),
      'image': resolve('src/image'),
      'js': resolve('src/js'),
      'styles': resolve('src/styles'),
      'fonts': resolve('src/fonts'),
      'store': resolve('src/store'),
    },
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `@import "styles/index.scss";`
            }
          }
        ],
      },
      {
        test: /\.css/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new vue(),
    new dotenv(),
    new html({
      template: './public/index.html',
      minify: true,
    }),
  ],
};