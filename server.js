require('dotenv').config();
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const routes = require('./routes');

const PORT = 3001;
const app = express();

// Connect to MongoDB
const dbConnection = require('./database');

app.use(session({
  secret: 'kittens_with_mittens',
  store: new MongoStore({ mongooseConnection: dbConnection }),
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true },
}))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));