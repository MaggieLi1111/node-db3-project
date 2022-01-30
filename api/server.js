const express = require('express');

const schemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', schemeRouter);

server.use("*", (req, res, next) => {
    next({status:404, message:"not found"})
} )

server.use( (err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        customMessage:"Not found",
        message:err.message,
        stack:err.stack,
    })
})

module.exports = server;