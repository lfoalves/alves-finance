const express = require('express')

const route = express.Router()

route.get("/alves-finance/", (request, response) => response.render('index'))

module.exports = route
