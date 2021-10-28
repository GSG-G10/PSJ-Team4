const router = require('express').Router();
const getCompanyInfo = require('../controllers');

router.get('/company/:companyId', getCompanyInfo);

module.exports = router;
