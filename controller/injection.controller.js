const pool = require('../database');

// exports.addPost = catchAsync(async (req, res) => {
// const { title: t, message: m } = req.body;
// const query = {
// text: 'INSERT INTO posts(title, message) VALUES($1, $2);',
// values: [t, m],
// };
// await pool
// .query(query)
// .then((response) =>
// res.status(200).json({
// status: 'success',
// data: response.rows,
// })
// )
// .catch((e) => console.error(e.stack));
// });
//
// exports.getPost = catchAsync(async (req, res) => {
// await pool
// .query('SELECT * FROM posts;')
// .then((response) =>
// res.status(200).json({
// status: 'success',
// data: response.rows,
// })
// )
// .catch((e) => console.error(e.stack));
// });

exports.getDetails = (req, res) => {
    res.render('injection');
};
