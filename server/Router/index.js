const router = require('express').Router();
const { getCompanyInfo } = require('../controllers');
const { checkEmployeeAccount } = require('../controllers/Auth/employee');
const { checkCompanyAccount } = require('../controllers/Auth/company');
const { handleAddEmployee, handleEditCompany } = require('../controllers');
const { checkAuth, createSession, loginValidation } = require('../middlewares');

router.get('/company/:companyId', getCompanyInfo);
router.post('/auth/employee', loginValidation, checkEmployeeAccount, createSession);
router.post('/auth/company', loginValidation, checkCompanyAccount, createSession);
router.post('/employee', handleAddEmployee, createSession);
router.put('/company', checkAuth, handleEditCompany);

module.exports = router;
