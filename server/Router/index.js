const router = require('express').Router();

const {
  getCompanyInfo,
  handleEditEmployee,
  handlePostReview,
  getCompanyReview,

} = require('../controllers');
const { checkEmployeeAccount } = require('../controllers/Auth/employee');
const { checkCompanyAccount } = require('../controllers/Auth/company');
const { getEmployee } = require('../controllers/getEmployee');

const { handleAddEmployee } = require('../controllers');
const { checkAuth, createSession, loginValidation } = require('../middlewares');

router.get('/company/:companyId', getCompanyInfo);
router.get('/employee/:employeeId', getEmployee);
router.get('/review/:companyId', getCompanyReview);

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
router.put('/employee/:id', (req, res) => {
  res.send('Information has changed');
});
router.post('/employee', handleAddEmployee, createSession);

module.exports = router;
