const router = require('express').Router();
const authController = require('../controllers/authController');
const validatePassword = require('../middlewares/validatePassword');

router.route('/signup')
  .post(validatePassword, authController.signup)

router.route('/login')
  .post(authController.login)

router.route('/logout')
  .post(authController.logout)

module.exports = router;