const connection = require('../../config/connection');

module.exports = (companyId, employeeId, reviewContent, rate, isAnonymous) => {
  const sql = {
    text: 'INSERT INTO review(employee_id, company_id, review_content, rate, is_anonymous) VALUES ($2, $1, $3, $4, $5)',
    values: [companyId, employeeId, reviewContent, rate, isAnonymous],

  };
  return connection.query(sql);
};
