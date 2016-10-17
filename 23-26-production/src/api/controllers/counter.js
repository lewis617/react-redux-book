function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
export default app => {
  app.get('/counter', (req, res) => {
    setTimeout(() => {
      if (Math.random() < 0.33) {
        res.status(500).end();
      } else {
        res.json({
          value: getRandomInt(1, 100)
        });
      }
    }, 1000);
  });
};
