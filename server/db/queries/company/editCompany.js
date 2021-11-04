const connetion = require('../../config/connection');

module.exports = (
  companyId,
  name,
  email,
  location,
  profileImage,
  startWorkTime,
  endWorkTime,
) => {
  const sql = {
    text: 'UPDATE company SET name = $2, email= $3, profile_img = $5, location= $4, start_work_time =$6, end_work_time =$7  WHERE id = $1;',
    values: [
      companyId,
      name,
      email,
      location,
      profileImage,
      startWorkTime,
      endWorkTime,
    ],
  };
  return connetion.query(sql);
};
