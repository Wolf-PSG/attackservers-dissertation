const express = require('express');
const cors = require('cors');
const session = require('express-session');
const redis = require('redis');
const client = redis.createClient();
const store = require('connect-redis')(session);
const testRouter = require('./routes/test.route');
const app = express(); //you don't need to manully define the content type in express
app.use(cors());
app.use(express.static(`public`)); //creates a static page which is linked to the url

client.on('error', (err) => {
    console.log('Redis error: ', err);
});

app.use(
    session({
        secret: 'TESTTESTESTESTESTEST',
        name: 'simulation-server',
        resave: false,
        saveUninitialized: true,
        maxAge: 3600000,
        cookie: { secure: false }, // Note that the cookie-parser module is no longer needed
        store: new store({
            host: 'redis://127.0.0.1',
            port: 6379,
            client: client,
            ttl: 86400,
        }),
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
