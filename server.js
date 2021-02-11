const app = require('./app');
const server = app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 4000 on heroku - 3000 on localhost');
});

process.on('unhandledRejection', (err) => {
    console.log('unhandled rejection! goodbye 👋');
    console.log(err);

    server.close(() => {
        process.exit(1);
    });
});
