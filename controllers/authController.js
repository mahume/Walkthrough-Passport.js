const db = require('../database/models');

module.exports = {
  signup(req, res) {
    // db.User
    //   .create(req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err))
    res.status(200).send(req.body);
  },
  login(req, res) {
    res.status(200).send(req.body);
  },
  logout(req, res) {
    res.status(200).send(req.body);
  },
}