const express = require('express');
const path = require('path');
const { celebrate, Segments, Joi } = require('celebrate');

const UserController = require('./controllers/UserController');
const ClientController = require('./controllers/ClientController');
const ProductController = require('./controllers/ProductController');
const ItemController = require('./controllers/ItemController');
const StokController = require('./controllers/StokController');
const CondominiumController = require('./controllers/CondominiumController');


const routes = express.Router();

routes.get('/', function(req, res){
    res.sendFile(path.join(__dirname +'/public/index.html'));
});

routes.get('/user', UserController.index);
routes.get('/client', ClientController.index);
routes.get('/product', ProductController.index);
routes.get('/stok', StokController.index);
routes.get('/item', ItemController.index);
routes.get('/condominium', CondominiumController.index);

module.exports = routes;
