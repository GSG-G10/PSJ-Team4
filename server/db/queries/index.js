const postReviewQuery = require('./review/postReview');
const addEmployeeQuery = require('./employee/addEmployee');
const getEmployeeByEmail = require('./employee/getEmployeeByEmail');
const { checkCompanyEmail, getCompanyInfoQuery, addCompany } = require('./company');

module.exports = {
  postReviewQuery,
  addEmployeeQuery,
  getEmployeeByEmail,
  checkCompanyEmail,
  getCompanyInfoQuery,
  addCompany,
};
