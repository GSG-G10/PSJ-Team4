const { editReviewQuery } = require('../db/queries/employee');
const postReviewSchema = require('../utils/postReviewSchema');

module.exports = async (req, res, next) => {
  try {
    const { reviewContent, rate, isAnonymous } = req.body;
    const { employeeId } = req;
    const { companyId } = req.params;

    await postReviewSchema.validateAsync({
      reviewContent, rate, isAnonymous,
    });

    await editReviewQuery(employeeId, companyId, reviewContent, rate, isAnonymous);
    res.json({ message: 'Your Review Updated Successfully' });
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json({ Error: err.details[0].message });
    } else {
      next(err);
    }
  }
};
