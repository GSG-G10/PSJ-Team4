const connection = require('../../config/connection');

module.exports = (firstName, lastName, email, password) => {
  const sqlQuery = {
    text: 'INSERT INTO employee(first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING id, profile_img, cover_img;',
    values: [firstName, lastName, email, password],
  };
  return connection.query(sqlQuery);
};
