const { checkCompanyEmail, getCompanyInfoQuery, addCompany } = require('./company');
const addEmployeeQuery = require('./employee/addEmployee');
const getEmployeeByEmail = require('./employee/getEmployeeByEmail');

module.exports = {
  addEmployeeQuery, getEmployeeByEmail, checkCompanyEmail, getCompanyInfoQuery, addCompany,
};
