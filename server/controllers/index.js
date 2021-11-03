const handleAddEmployee = require('./addEmployee');
const getCompanyInfo = require('./getCompany');
const handlePostReview = require('./postReview');
const handleEditCompany = require('./handleEditCompany');
const handleEditReview = require('./handleEditReview');
const handleEditEmployee = require('./handleEditEmployee');

module.exports = {
  handlePostReview, getCompanyInfo, handleAddEmployee, handleEditCompany, handleEditReview, handleEditEmployee,
};
