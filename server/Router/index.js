const router = require('express').Router();
const { getCompanyInfo } = require('../controllers');
const { loginValidation } = require('../middlewares');
const { checkEmployeeAccount } = require('../controllers/Auth/employee');
const { checkCompanyAccount } = require('../controllers/Auth/company');
const { createSession } = require('../controllers/Auth');
const {getEmployee} = require('../controllers/getEmployee');

router.get('/company/:companyId', getCompanyInfo);
router.get('/employee/:employeeId', getEmployee);

router.post('/auth/employee', loginValidation, checkEmployeeAccount, createSession);
router.post('/auth/company', loginValidation, checkCompanyAccount, createSession);

module.exports = router;
