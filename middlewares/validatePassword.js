const validatePassword = (req, res, next) => {
  // Destructure keys from req.body object
  const { password, confirmedPassword } = req.body;
  
  // Trim whitespace and validate both passwords are identical
  if (password.trim() === confirmedPassword.trim()) {
    return next();
  }

  // If passwords do not match, send error to client
  res.status(400).send({ error: 'Passwords do not match'});
}

module.exports = validatePassword;