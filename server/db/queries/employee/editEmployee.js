const connetion = require('../../config/connection');

module.exports = (employeeId,
  firstName,
  lastName,
  email,
  contact,
  address,
  birthDate,
  status,
  profileImage,
  coverImage) => {
  const sql = {
    text: 'UPDATE employee SET first_name = $2, last_name = $3, email= $4, profile_img = $9, cover_img=$10, location= $6, phone_number = $5, status=$8, age= $7 WHERE id = $1;',
    values: [
      employeeId,
      firstName,
      lastName,
      email,
      contact,
      address,
      birthDate,
      status,
      profileImage,
      coverImage,
    ],
  };
  return connetion.query(sql);
};
