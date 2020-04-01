require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const express = require('express');
const cors = require('cors');
const { errors } =require('celebrate');
const routes = require('./routes');
const path = require('path');

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(routes);
app.use(errors());

module.exports = app;
