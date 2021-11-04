const { editCompanyQuery } = require('../db/queries/company');
const editCompanySchema = require('../utils/editCompanySchema');

module.exports = async (req, res, next) => {
  try {
    const {
      name, email, profileImage, location, startWorkTime, endWorkTime,
    } = req.body;
    const { companyId } = req;

    await editCompanySchema.validateAsync({
      name,
      email,
      profileImage,
      location,
      startWorkTime,
      endWorkTime,
    });

    await editCompanyQuery(
      companyId,
      name,
      email,
      location,
      profileImage,
      startWorkTime,
      endWorkTime,
    );
    res.json({ message: 'Your Information updated Successfully' });
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json({ Error: err.details[0].message });
    } else {
      next(err);
    }
  }
};
