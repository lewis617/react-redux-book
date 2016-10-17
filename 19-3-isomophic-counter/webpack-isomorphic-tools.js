var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

var config = {
    assets: {
    images: {extensions: ['png']},
    style_modules: {
      extensions: ['css'],
      filter: function(module, regex, options, log) {
        return WebpackIsomorphicToolsPlugin.style_loader_filter(module, regex, options, log);
      },
      path: function(module, options, log) {
        return WebpackIsomorphicToolsPlugin.style_loader_path_extractor(module, options, log);
      },
      parser: function(module, options, log) {
        return WebpackIsomorphicToolsPlugin.css_modules_loader_parser(module, options, log);
      }
    }
  }
};

module.exports = config;
