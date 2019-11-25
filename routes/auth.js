const router = require('express').Router();
const authController = require('../controllers/authController');

router.route('/signup')
  .post(authController.signup)

router.route('/login')
  .post(authController.login)

router.route('/logout')
  .post(authController.logout)

module.exports = router;