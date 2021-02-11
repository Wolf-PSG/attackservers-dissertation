// add the app.js file
const app = require('./app');
const server = app.listen(4000, () => {
    console.log('listening on 4000');
});

process.on('unhandledRejection', (err) => {
    console.log('unhandled rejection! goodbye 👋');
    console.log(err);

    server.close(() => {
        process.exit(1);
    });
});
