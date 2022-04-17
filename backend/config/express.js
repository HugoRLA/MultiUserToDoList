const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');
const cors = require('cors');

module.exports = () => {
  const app = express();

  app.set('port', process.env.PORT || config.get('server.port'));

  app.use(bodyParser.json());

  app.use(cors({
    origin: '*'
  }));

  app.use('/projects', require('../routers/projects'));

  return app;
};