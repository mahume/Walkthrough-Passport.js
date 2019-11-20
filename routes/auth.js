const router = require('express').Router();
const authController = require('../controllers/authController');

router.route('/')
  .post(authController.signUp)

router.route('/login')
  .post(authController.logIn)

router.route('/logout')
  .post(authController.logOut)

module.exports = router;