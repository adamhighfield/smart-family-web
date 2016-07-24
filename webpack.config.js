var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './public/javascripts/main.js',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
  ],
  output: {
    path: __dirname + '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
