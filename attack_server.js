const express = require('express');
const cors = require('cors');
const path = require('path')
const session = require('express-session');
const attackRouter = require('./routes/attack.route');
const app = express();
app.use(cors());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(`public`)); //creates a static page which is linked to the url
//Middleware
app.use((req, res, next) => {
    //creates a time for the console
    req.requestTime = new Date().toISOString();
    next();
});

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

app.use('/', attackRouter);
app.listen(3000, () => {
    console.log(`Liistening on port: 3000` );
});

process.on('unhandledRejection', (err) => {
    console.log('unhandled rejection! goodbye 👋');
    console.log(err);

    server.close(() => {
        // closing server gracefully
        process.exit(1);
    });
});