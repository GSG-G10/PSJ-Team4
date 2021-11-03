const connection = require('../../config/connection');

module.exports = (employeeId, companyId) => {
  const sql = {
    text: 'SELECT * FROM review WHERE employee_id = $1 AND company_id = $2',
    values: [employeeId, companyId],
  };
  return connection.query(sql);
};
