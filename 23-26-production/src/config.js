module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || (process.env.NODE_ENV === 'production' ? 8080 : 3000),
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT || 3030,
  app: {
    title: 'React Redux Book',
    description: 'React Redux Book Example',
    head: {
      titleTemplate: 'React Redux Book: %s',
      meta: [
        {
          name: 'description',
          content: 'React Redux Book Example'
        },
        { charset: 'utf-8' }
      ]
    }
  }
};
