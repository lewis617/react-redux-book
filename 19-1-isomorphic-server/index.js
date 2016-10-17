/* eslint-disable */
var WebpackIsomorphicTools = require('webpack-isomorphic-tools');

var config = { assets: { images: { extensions: ['png'] } } };

new WebpackIsomorphicTools(config)
  .development()
  .server(__dirname, function () {
    console.log(require('./Counter.png'))
  });
