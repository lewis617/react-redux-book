var path = require('path');
var webpack = require('webpack');

var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

module.exports = {
  context: path.resolve(__dirname),
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3001/__webpack_hmr',
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3001/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools')).development()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: ['react-hmre']
        }
      },
      { test: /\.png$/, loader: 'url-loader?limit=10240' },
      { test: /\.css$/, loader: 'style-loader!css-loader?modules' }
    ]
  }
};
