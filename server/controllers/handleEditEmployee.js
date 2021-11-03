const { editEmployeeQuery } = require('../db/queries/employee');
const editEmployeeSchema = require('../utils/editEmployeeSchema');

module.exports = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      contact,
      address,
      birthDate,
      status,
      profileImage,
      coverImage,
    } = req.body;
    const { employeeId } = req;

    await editEmployeeSchema.validateAsync({
      firstName,
      lastName,
      email,
      contact,
      address,
      birthDate,
      status,
      profileImage,
      coverImage,
    });
    await editEmployeeQuery(employeeId,
      firstName,
      lastName,
      email,
      contact,
      address,
      birthDate,
      status,
      profileImage,
      coverImage);
    res.json({ message: 'Your Information updated Successfully' });
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json({ Error: err.details[0].message });
    } else {
      next(err);
    }
  }
};
