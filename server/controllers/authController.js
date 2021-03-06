const bcrypt = require('bcrypt');
const db = require('../database/models');

const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Search DB to see if email already exists
    const user = await db.User.findOne({ email }).exec();

    // If user if truthy, an email already exists
    if (user) {
      return res.status(400).send({ emailError: 'Email is already registered' });
    }

    // Else, we can continue on to creating a new user

    // Avoid storing password in DB as plain text by using "bcrypt" hashing package
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with email from req.body and hashed password
    const newUser = await db.User.create({
      email,
      password: hashedPassword
    });

    // Send a success status
    return res.status(200).send(newUser);
  } catch (error) {
    return res.send(500).send({ error: 'DB error occurred' });
  }
};

const login = async (req, res) => {
  res.status(200).send(req.body);
};

const logout = async (req, res) => {
  res.status(200).send({ message: 'Logging out' });
};

module.exports = {
  signup,
  login,
  logout
};
