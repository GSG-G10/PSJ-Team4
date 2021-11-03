const checkEmployeeById = require('./checkEmployeeById');

const { updateEmployeeInfoQuery } = require('../../db/queries/employee');
const { emailSchema } = require('../../utils');

const updateEmployeeInfo = async (req, res) => {
  try {
    const { employeeId } = await req;
    const {
      firstName, lastName, email, location, status,
    } = await req.body;

    const checkId = await checkEmployeeById(employeeId); // Check the ID in database
    if (checkId) {
      await emailSchema.validateAsync({ email }); // Validates the email address
      const response = await updateEmployeeInfoQuery(
        employeeId,
        firstName,
        lastName,
        email,
        location,
        status,
      );
      res.json(response.rows[0]);
    } else {
      res.status(404);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = updateEmployeeInfo;
