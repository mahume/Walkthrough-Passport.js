module.exports = {
  signUp(req, res) {
    res.json({ action: "Sign up"})
  },
  logIn(req, res) {
    res.json({ action: "Log in"})
  },
  logOut(req, res) {
    res.json({ action: "Log out"})
  },
}