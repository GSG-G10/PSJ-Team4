const connection = require('../../config/connection');

module.exports = (employeeId) => {
  const sql = {
    text: 'SELECT * FROM review WHERE employee_id = $1',
    values: [employeeId],
  };
  return connection.query(sql);
};
