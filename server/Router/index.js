const router = require('express').Router();

const { getCompanyInfo, handleEditReview, handleEditEmployee } = require('../controllers');
const { checkEmployeeAccount } = require('../controllers/Auth/employee');
const { checkCompanyAccount } = require('../controllers/Auth/company');
const { createSession } = require('../controllers/Auth');
const {getEmployee} = require('../controllers/getEmployee');

const { handleAddEmployee } = require('../controllers');
const { checkAuth, createSession, loginValidation } = require('../middlewares');

router.get('/company/:companyId', getCompanyInfo);
router.get('/employee/:employeeId', getEmployee);

router.post('/auth/employee', loginValidation, checkEmployeeAccount, createSession);
router.post('/auth/company', loginValidation, checkCompanyAccount, createSession);
router.put('/employee', checkAuth, handleEditEmployee);
router.post('/employee', handleAddEmployee, createSession);
router.put('/company', checkAuth, handleEditCompany);
router.put('/review/:companyId', checkAuth, handleEditReview);

module.exports = router;
