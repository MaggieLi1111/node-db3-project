const express = require('express');

const schemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', schemeRouter);

server.use("*", (req, res, next) => {
    next({status:404, message:"not found"})
} )


module.exports = server;