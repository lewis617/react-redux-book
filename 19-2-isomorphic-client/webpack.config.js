var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

var config = { assets: { images: { extensions: ['png'] } } };

var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(config);

module.exports = {
  context: __dirname,
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  module: {
    loaders: [
      { test: /\.png$/, loader: 'url-loader?limit=10240' }
    ]
  },
  plugins: [webpackIsomorphicToolsPlugin]
};
