const express = require('express');
const app = express();
const port = 3000;
const api = require('./api/v1');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./api/v1/middlewares/error.handler');
// Routes
app.use('/api', api);
app.use('/api/1', api);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
