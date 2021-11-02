const { checkEmployeeByIdQuery } = require('../../db/queries/employee');

const checkEmployeeById = async (id) => {
  const databaseResult = await checkEmployeeByIdQuery(id);
  return databaseResult.rows[0].case;
};
module.exports = checkEmployeeById;
