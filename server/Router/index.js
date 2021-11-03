const router = require('express').Router();
const { checkEmployeeAccount, handleEditEmployee } = require('../controllers/Auth/employee');
const { checkCompanyAccount } = require('../controllers/Auth/company');
const { handleAddEmployee, checkUser, getCompanyInfo } = require('../controllers');
const { checkAuth, createSession, loginValidation } = require('../middlewares');

router.get('/check/user', checkUser);
router.get('/company/:companyId', getCompanyInfo);
router.post('/auth/employee', loginValidation, checkEmployeeAccount, createSession);
router.post('/auth/company', loginValidation, checkCompanyAccount, createSession);
router.put('/employee', checkAuth, handleEditEmployee);
router.post('/employee', handleAddEmployee, createSession);

module.exports = router;
