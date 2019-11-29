const mongoose = require('mongoose');
const { mongodbURI } = require('../config/keys');

mongoose
  .connect(mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to DB'))
  .catch(err => console.error('DB connection', err));

module.exports = mongoose.connection;
