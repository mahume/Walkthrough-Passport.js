const express = require('express');
const routes = require('./routes');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// Connect to MongoDB
const dbConnection = require('./database');

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.set('trust proxy', 1);
app.use(session({
  secret: 'kittens_with_mittens',
  store: new MongoStore({ mongooseConnection: dbConnection }),
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true },
}))


app.listen(PORT, () => console.log(`SERVER: http://localhost:${PORT}`));