const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/paige', (req, res) => {
  res.send('Paige is the cutest');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
