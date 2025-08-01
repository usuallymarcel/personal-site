const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/Hello', (req, res) => {
  res.send('Hello');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
