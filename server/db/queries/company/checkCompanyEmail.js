const connection = require('../../config/connection');

module.exports = (email) => connection.query('SELECT * FROM company WHERE email = $1', [email]);
