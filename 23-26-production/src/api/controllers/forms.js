export default app => {
  app.post('/forms', (req, res) => {
    const body = req.body;
    body.submitTime = new Date;
    setTimeout(() => {
      if (Math.random() < 0.33) {
        res.status(500).end();
      } else {
        res.json(body);
      }
    }, 1000);
  });
};
