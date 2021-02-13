const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dissertation',
    password: '1199',
    port: 5432,
});

module.exports = pool;
