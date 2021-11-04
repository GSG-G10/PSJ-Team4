const connetion = require('../../config/connection');

module.exports = (companyId) => connetion.query(
  'SELECT name, email, profile_img, location, start_work_time, end_work_time from company WHERE id= $1',
  [companyId],
);
