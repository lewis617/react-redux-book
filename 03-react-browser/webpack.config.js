module.exports = {
  entry: './src/client',
  output: {
    path: __dirname + '/static/dist',
    filename: 'main.js'
  },
  module: {
    loaders: [{ test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] }]
  }
};
