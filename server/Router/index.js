const router = require('express').Router();
const { getCompanyInfo, handlePostReview } = require('../controllers');
const { loginValidation } = require('../middlewares');
const { checkEmployeeAccount } = require('../controllers/Auth/employee');
const { checkCompanyAccount } = require('../controllers/Auth/company');
const { createSession } = require('../controllers/Auth');
const { checkAuth } = require('../middlewares');

router.get('/company/:companyId', getCompanyInfo);
router.post('/auth/employee', loginValidation, checkEmployeeAccount, createSession);
router.post('/auth/company', loginValidation, checkCompanyAccount, createSession);
router.post('/review/:companyId', checkAuth, handlePostReview);

module.exports = router;
