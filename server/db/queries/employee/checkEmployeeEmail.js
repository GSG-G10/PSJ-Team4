const connection = require('../../config/connection');

module.exports = (email) => connection.query(`
SELECT * FROM employee WHERE email = $1
`, [email]);
