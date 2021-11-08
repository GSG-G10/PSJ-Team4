const router = require('express').Router();

const {
  getCompanyInfo,
  handleEditEmployee,
  handlePostReview,
  handleAddEmployee,
  handleEditReview,
} = require('../controllers');
const { checkEmployeeAccount } = require('../controllers/Auth/employee');
const { checkCompanyAccount } = require('../controllers/Auth/company');
const { getEmployee } = require('../controllers/getEmployee');
const { checkAuth, createSession, loginValidation } = require('../middlewares');

router.get('/company/:companyId', getCompanyInfo);
router.get('/employee/:employeeId', getEmployee);

router.post(
  '/auth/employee',
  loginValidation,
  checkEmployeeAccount,
  createSession,
);
router.post(
  '/auth/company',
  loginValidation,
  checkCompanyAccount,
  createSession,
);
router.post('/review/:companyId', checkAuth, handlePostReview);
router.put('/employee', checkAuth, handleEditEmployee);
router.post('/employee', handleAddEmployee, createSession);
router.put('/review/:companyId', checkAuth, handleEditReview);

module.exports = router;
