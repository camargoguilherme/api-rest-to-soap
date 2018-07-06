const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

//Rotas
const index = require('./routes/index');
const visitaRoute = require('./routes/visitaRoute');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/', index);
app.use('/visita', visitaRoute);
module.exports = app;