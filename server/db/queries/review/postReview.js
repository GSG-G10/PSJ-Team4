const connection = require('../../config/connection');

module.exports = (employeeId, companyId, reviewContent, rate, isAnonymous) => {
  const sql = {
    text: 'INSERT INTO review(employee_id, company_id, review_content, rate, is_anonymous) VALUES ($1, $2, $3, $4, $5)',
    values: [employeeId, companyId, reviewContent, rate, isAnonymous],

  };
  return connection.query(sql);
};
