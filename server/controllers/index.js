const handleAddEmployee = require('./addEmployee');
const getCompanyInfo = require('./getCompany');
const handlePostReview = require('./postReview');
const handleEditCompany = require('./handleEditCompany');
const handleEditEmployee = require('./handleEditEmployee');
const handleEditReview = require('./handleEditReview');
const getCompanyReview = require('./getCompanyReview');

module.exports = {
  handlePostReview,
  getCompanyInfo,
  handleAddEmployee,
  handleEditCompany,
  handleEditEmployee,
  handleEditReview,
  getCompanyReview,
};
