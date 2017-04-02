const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, '');

const config = {
  entry: `${APP_DIR}/app/app.js`,
  output: {
    path: path.resolve(__dirname, 'build/'),
    publicPath: '/build/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|browser_components)/,
        include: APP_DIR,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      }, {
        test: /\.png/,
        loader: 'file-loader',
      }, {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader!',
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      }, {
        test: /\.svg$/,
        loader: 'svg-url-loader',
      },
    ],
  },
};

module.exports = config;
