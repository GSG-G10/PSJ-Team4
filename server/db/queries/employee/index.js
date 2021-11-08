const checkEmployeeEmail = require('./checkEmployeeEmail');
const getEmployeeById = require('./getEmployeeById');
const addEmployee = require('./addEmployee');
const getEmployeeByEmail = require('./getEmployeeByEmail');

const editEmployeeQuery = require('./editEmployee');

module.exports = {
  editEmployeeQuery,
  checkEmployeeEmail,
  addEmployee,
  getEmployeeByEmail,
  getEmployeeById,
};
