const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(routes);

app.listen(PORT, () => console.log(`Server listening on Port: http://localhost:${PORT}`));