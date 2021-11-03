const checkEmployeeEmail = require('./checkEmployeeEmail');
const checkEmployeeByIdQuery = require('./checkEmployeeByIdQuery');
const updateEmployeeInfoQuery = require('./updateEmployeeInfoQuery');
const editEmployeeQuery = require('./editEmployee');
const addEmployee = require('./addEmployee');
const getEmployeeByEmail = require('./getEmployeeByEmail');

module.exports = {
  checkEmployeeEmail,
  editEmployeeQuery,
  addEmployee,
  getEmployeeByEmail,
  checkEmployeeByIdQuery,
  updateEmployeeInfoQuery,
};
