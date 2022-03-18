const express = require('express');
const app = express();
const port = 3000;
const api = require('./api/v1');

// Routes
app.use('/api', api);
app.use('/api/1', api);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
