var path = require('path');
var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'js/prod'),
    filename: 'text_tool.js'
  },
  plugins: [
      /*new UglifyJsPlugin({
        uglifyOptions: {
          sourceMap: true,
          ie8: false,
          ecma: 6,
          mangle: {
            properties: {
              
            }
          },
          output: {
            comments: false,
            beautify: true
          },
          warnings: false
        }
      })*/
    ]
  ,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  stats: {
      colors: true
  },
  devtool: 'source-map'
};