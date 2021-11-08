require('dotenv').config();
const { join } = require('path');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const router = require('./Router');

const app = express();
app.set('port', process.env.PORT || 5000);
app.set('x-powered-by', false);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

module.exports = app;
