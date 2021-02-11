const fs = require('fs');
let messages = [];

exports.getMessages = (req, res) => {
    try {
        if (req.query.newMessage) messages.push(req.query.newMessage);
        const data = messages.map((message) => `<dd>${message}</dd>`).join(' ');
        const template = fs.readFileSync(
            `${__dirname}/templates/index.html`,
            'utf8'
        );
        const view = template.replace('$messages$', data);
        res.send(view);
    } catch (err) {
        console.log(err);
    }
};

exports.destorySession = (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/');
    });
};
