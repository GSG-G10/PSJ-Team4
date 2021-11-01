const connection = require('../config/connection');

module.exports = (email) => {
  const sqlQuery = {
    text: 'SELECT * FROM employee WHERE email = $1;',
    values: [email],
  };
  return connection.query(sqlQuery);
};
