const express = require('express');
const questionController = require("./controllers/questionController");
const roomController = require("./controllers/roomController");

const routes = express.Router();

routes.get('/', (req, res) => res.render("index", {page: 'enter-room'}));
routes.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}));

routes.get('/room/:room', (req, res) => res.render("room"));

routes.post('/questions/:room/:question/:action', questionController.index);
routes.post('/create-room', roomController.create);

module.exports = routes;