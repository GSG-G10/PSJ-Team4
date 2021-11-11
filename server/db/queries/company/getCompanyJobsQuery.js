const connection = require('../../config/connection');

const getJobsQuery = async (id) => {
  const { rows } = await connection.query(
    `
  SELECT 
  jobs.id,
  jobs.title,
  jobs.location,
  jobs.timepart,
  jobs.salary,
  jobs.skills,
  jobs.category,
  jobs.date,
  jobs.company_id,
  company.name,
  company.location_lat,
  company.location_lon,
  company.location,
  company.profile_img
  FROM jobs 
  JOIN company
  ON
  company.id = jobs.company_id
  AND
  jobs.company_id = $1

  `,
    [id],
  );
  return rows;
};
module.exports = getJobsQuery;
