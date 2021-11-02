const router = require('express').Router();
const { getCompanyInfo } = require('../controllers');
const { loginValidation } = require('../middlewares');
const { checkEmployeeAccount, handleEditEmployee } = require('../controllers/Auth/employee');
const { checkCompanyAccount } = require('../controllers/Auth/company');
const { createSession } = require('../controllers/Auth');

router.get('/company/:companyId', getCompanyInfo);
router.post('/auth/employee', loginValidation, checkEmployeeAccount, createSession);
router.post('/auth/company', loginValidation, checkCompanyAccount, createSession);
router.put('/employee', handleEditEmployee);

module.exports = router;
