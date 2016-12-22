var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'app':'./src/main.ts',
  },
  output: {
    path: './dist',
    filename: '[name].bundle.js'
  },
  module:{
    loaders: [
      {test: /\.component.ts$/, loader: 'ts!angular2-template'},
      {test: /\.ts$/, exclude: /\.component.ts$/ , loader: 'ts'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.css$/, exclude: /\.component.css$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap') },
      {test: /\.css$/, include: /\.component.css$/, loader: 'raw'}
    ]
  },
  resolve:{
    extensions: ['', '.js', '.ts','.css']
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new BrowserSyncPlugin({
      proxy: 'localhost:8080'
    },{
      reload: false
    }),
    new ExtractTextPlugin('[name].css')
  ]
};