const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const generate_cases = require('./generate_cases');
const morgan = require('morgan');
var express = require('express');

var app = express();

app.use(cors());
app.use(bodyParser.json({ type: '*/*' })); // parses any requests into json
app.use(compression());
app.use(morgan('combined'));

const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 8080;

app.get('/readiness', (req, res, next) => {
  res.send('ok');
});

app.post('/generate_cases', generate_cases);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server listening on: ${port}`);
  });
}

module.exports = app;
