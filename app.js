const express = require('express');
const cors = require('cors');
const session = require('express-session');
const testRouter = require('./routes/test.route');
const app = express(); //you don't need to manully define the content type in express
app.use(cors());
app.use(express.static(`public`)); //creates a static page which is linked to the url
app.use(
    session({
        secret: 'secret',
        maxAge: 3600000,
        resave: true,
        saveUninitialized: true,
        cookie: {
            httpOnly: false,
        },
    })
);
//Middleware
app.use((req, res, next) => {
    //creates a time for the console
    req.requestTime = new Date().toISOString();
    next();
});

app.use('/', testRouter);
module.exports = app;
