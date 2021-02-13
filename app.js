const express = require('express');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const redis = require('redis');
// const client = redis.createClient(process.env.REDIS_URL); uncooment for heroku
const client = redis.createClient({ auth_pass: 'Iamtheman1234!' });
const store = require('connect-redis')(session);
const testRouter = require('./routes/test.route');
const injectionRouter = require('./routes/injection.route');
const app = express(); //you don't need to manully define the content type in express
app.use(cors());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
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
            host: '127.0.0.1',
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
app.use('/injection', injectionRouter);
module.exports = app;
