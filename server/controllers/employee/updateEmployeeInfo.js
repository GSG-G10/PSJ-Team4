const { decode } = require('jsonwebtoken');

const checkEmployeeById = require('./checkEmployeeById');
const updateEmployeeInfoQuery = require('../../db/queries');

const updateEmployeeInfo = async (req, res, next) => {
  const { session } = await req.cookies;
  //   const { id } = req.params;
  //   const decodedSession = await decode(session);

  //   if (id === session.id) {
  //     const checkResult = await checkEmployeeById(id);
  //     if (checkResult) {

  //     }
  //   }

  console.log(decodedSession);
//   return checkResult ? next() : res.status(404).send('Not Found');
};
module.exports = updateEmployeeInfo;
