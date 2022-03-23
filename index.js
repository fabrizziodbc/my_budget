const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const api = require('./api/v1');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');
app.use(express.json());
//cors
const whiteList = ['http://localhost:3000/', 'http://localhost:5432/'];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Access denied (cors)'));
    }
  },
};
app.use(cors(options));
// Routes
app.use('/api', api);
app.use('/api/1', api);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
