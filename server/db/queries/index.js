const postReviewQuery = require('./review/postReview');
const { checkCompanyEmail, getCompanyInfoQuery, addCompany } = require('./company');
const addEmployeeQuery = require('./employee/addEmployee');
const getEmployeeByEmail = require('./employee/getEmployeeByEmail');

module.exports = {
  postReviewQuery,
  addEmployeeQuery,
  getEmployeeByEmail,
  checkCompanyEmail,
  getCompanyInfoQuery,
  addCompany,
};
