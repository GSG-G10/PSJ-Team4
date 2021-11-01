const router = require('express').Router();

const handleAddEmployee = require('../controllers');

router.post('/employee', handleAddEmployee);

module.exports = router;
