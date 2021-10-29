const router = require('express').Router();

const { loginValidation } = require('../middlewares');
const { checkEmployeeAccount, createEmployeeSession } = require('../controllers/Auth/employee');
const { checkCompanyAccount, createCompanySession } = require('../controllers/Auth/company');

router.post('/e-login', loginValidation, checkEmployeeAccount, createEmployeeSession);
router.post('/c-login', loginValidation, checkCompanyAccount, createCompanySession);

module.exports = router;
