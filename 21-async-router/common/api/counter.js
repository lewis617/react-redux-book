module.exports = function(app) {
  app.get('/api/counter', (req, res) => {
    setTimeout(function () {
      if (Math.random() < 0.33) {
        res.status(500).end();
      } else {
        res.json({
          value: getRandomInt(1, 100)
        });
      }
    }, 1000)
  })
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
