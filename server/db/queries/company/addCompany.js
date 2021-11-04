const connection = require('../../config/connection');

module.exports = (name, email, password, location) => {
  const sqlQuery = {
    text: 'INSERT INTO Company (name, email, password, location) Values ($1, $2,$3,$4) RETURNING id',
    values: [name, email, password, location],
  };
  return connection.query(sqlQuery);
};
