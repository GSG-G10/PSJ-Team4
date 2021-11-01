const connection = require('../config/connection');

module.exports = (firstName, lastName, email, password) => {
  const sqlQuery = {
    text: 'INSERT INTO employee(first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURN id, profile_img;',
    values: [firstName, lastName, email, password],
  };
  return connection.query(sqlQuery);
};
