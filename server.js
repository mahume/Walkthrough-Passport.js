const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;


app.use('/', (req, res) => {
  res.json({
    message: "Hello World",
  })
});

app.listen(PORT, () => console.log(`Server listening on Port: http://localhost:${PORT}`));