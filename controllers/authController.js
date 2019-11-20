const db = require('../database/models');

module.exports = {
  signUp(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  logIn(req, res) {
    res.json({ action: "Log in"})
  },
  logOut(req, res) {
    res.json({ action: "Log out"})
  },
}