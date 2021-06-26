const express = require('express');
const questionController = require("./controllers/questionController");

const routes = express.Router();

routes.get('/', (req, res) => res.render("index", {page: 'enter-room'}));
routes.get('/room', (req, res) => res.render("room"));
routes.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}));

routes.post('/room/:room/:question/:action', questionController.index);
routes.post('/room/create-room', roomController.create);

module.exports = routes;