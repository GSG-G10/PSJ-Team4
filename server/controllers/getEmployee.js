const { getEmployeeById } = require('../db/queries/employee');

const getEmployee = async (req, res, next) => {
  const { employeeId } = req.params;
  try {
    const { rows: data } = await getEmployeeById(employeeId);
    res.json({ data });
  } catch (err) {
    next(err);
  }
};

module.exports = {getEmployee}
