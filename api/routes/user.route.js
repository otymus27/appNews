const route = require('express').Router();

const userControle = require('../controllers/user.controller');


route.get("/", userControle.soma);

module.exports = route;