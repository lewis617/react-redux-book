/* eslint-disable */
require('babel-register');

var path = require('path');
var rootDir = path.resolve(__dirname, '..');

var WebpackIsomorphicTools = require('webpack-isomorphic-tools');
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../webpack-isomorphic-tools'))
  .development()
  .server(rootDir, function() {
    require('./server')
  });
