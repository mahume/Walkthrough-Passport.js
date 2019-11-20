const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// Connect to MongoDB
require('./database');


app.listen(PORT, () => console.log(`SERVER: http://localhost:${PORT}`));