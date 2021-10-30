const router = require('express').Router();

const { loginValidation } = require('../middlewares');
const { checkEmployeeAccount } = require('../controllers/Auth/employee');
const { checkCompanyAccount } = require('../controllers/Auth/company');
const { createSession } = require('../controllers/Auth');

router.post('/e-login', loginValidation, checkEmployeeAccount, createSession);
router.post('/c-login', loginValidation, checkCompanyAccount, createSession);

module.exports = router;
