const route = require('express').Router();

const userControle = require('../controllers/user.controller');


route.post("/", userControle.create);

module.exports = route;