const mongoose = require('mongoose');

const mongodbURI = 'mongodb://localhost:27017/walkthrough-passport';

mongoose.connect(mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DATABASE: Connected'))
  .catch(err => console.error(err));

module.exports = mongoose.connection;