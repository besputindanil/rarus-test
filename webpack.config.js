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
    static: path.join(__dirname, './build'),
    compress: true,
    port: 8080,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      views: resolve('src/views'),
      components: resolve('src/components'),
      image: resolve('src/image'),
      js: resolve('src/js'),
      styles: resolve('src/styles'),
      store: resolve('src/store'),
      router: resolve('src/router'),
      data: resolve('src/data'),
    },
    extensions: ['.js', '.vue', '.json'],
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
              additionalData: `@import "styles/index.scss";`,
            },
          },
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
