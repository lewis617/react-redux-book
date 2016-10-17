export default app => {
  app.get('/loadAuth', (req, res) => {
    res.json(req.session.user || null);
  });
};
