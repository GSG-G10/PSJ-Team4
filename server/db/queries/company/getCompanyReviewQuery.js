const connection = require('../../config/connection');

module.exports = async (id) => {
  const { rows } = await connection.query(
    `
  SELECT
   review.is_anonymous,
    review.review_content,
    employee.first_name,
    employee.last_name,
    employee.profile_img,
    review.employee_id
    FROM review 
    JOIN employee 
    ON 
    employee.id = review.employee_id 
    AND 
    review.company_id = $1`,
    [id],
  );
  return rows;
};
