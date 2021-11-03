const { postReviewQuery, checkReviewByIdQuery } = require('../db/queries/review');
const postReviewSchema = require('../utils/postReviewSchema');

module.exports = async (req, res, next) => {
  try {
    const { companyId } = req.params;
    const { employeeId } = req;
    const { reviewContent, rate, isAnonymous } = req.body;
    await postReviewSchema.validateAsync({
      reviewContent, rate, isAnonymous,
    });
    const { rowCount } = await checkReviewByIdQuery(employeeId, companyId);
    if (!rowCount) {
      await postReviewQuery(companyId, employeeId, reviewContent, rate, isAnonymous);
      res.json({ message: 'Review Added Successfully' });
    } else {
      res.status(405).json({ Error: 'You can\'t add more than one review' });
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ Error: error.details[0].message });
    } else {
      next(error);
    }
  }
};
