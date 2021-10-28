const connetion = require('../config/connection');

module.exports = (companyId) => connetion.query('SELECT * from company WHERE id= $1', [companyId]);
