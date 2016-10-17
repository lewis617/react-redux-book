export default app => {
  app.get('/logout', (req, res) => {
    let session = req.session;
    session.destroy(() => {
      session = null;
    });
    res.json(null);
  });
};
