const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

userSchema.methods = {
  hashPassword(plainTextPassword) {
    return bcrypt.hashSync(plainTextPassword, bcrypt.genSaltSync(10));
  },
  validatePassword(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
