/* eslint-disable */
if (process.env.NODE_ENV === 'production') {
  require('../build/api/api');
}
else {
  require('babel-register');
  require('../src/api/api');
}
