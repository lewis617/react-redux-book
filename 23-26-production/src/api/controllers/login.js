export default app => {
  app.post('/login', (req, res) => {
    const user = {
      name: req.body.name
    };
    const session = req.session;
    session.user = user;
    res.json(user);
  });
};
