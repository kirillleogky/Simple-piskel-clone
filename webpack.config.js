const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/screens/app/index.js',
    landing: './src/screens/landing/index.js'
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name]/main.js"
  },
  module: {
  rules: [
    {
      test: /\.js$/,
      enforce: 'pre',
      exclude: /node_modules/,
      loader: 'eslint-loader',
    },
    {
      test: /\.scss$/,
      use: [{
          loader: "style-loader"
      }, {
          loader: "css-loader"
      }, {
          loader: "sass-loader",
      }]
    },
    {
      test: /\.(jpg|png|svg|ttf|woff|eot)$/,
      loader: 'url-loader',
      options: {
       name: 'img/[name].[ext]',
      },
    }
  ],
 },
  plugins: [
   new HtmlWebpackPlugin({
     inject: true,
     chunks: ['app'],
     template: 'src/screens/app/app.html',
     filename: 'app/index.html'
   }),
   new HtmlWebpackPlugin({
     inject: true,
     chunks: ['landing'],
     template: 'src/screens/landing/landing.html',
     filename: 'index.html'
   }),
   new CopyWebpackPlugin([
     { from: 'src/img', to: `img` },
  ]),
 ]
};
