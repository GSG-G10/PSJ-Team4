const connection = require('../../config/connection');

module.exports = (employeeId, companyId, reviewContent, rate, isAnonymous) => {
  const sql = {
    text: 'UPDATE review SET review_content = $3, rate = $4, is_anonymous= $5 WHERE employee_id = $1 AND company_id = $2;',
    values: [employeeId, companyId, reviewContent, rate, isAnonymous],
  };
  return connection.query(sql);
};
