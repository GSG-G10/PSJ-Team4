const { postReviewQuery, checkReviewByIdQuery } = require('../db/queries/review');
const postReviewSchema = require('../utils/postReviewSchema');

module.exports = async (req, res, next) => {
  try {
    const { companyId } = req.params;
    const { employeeId } = req;
    const { reviewContent, rate, isAnonymous } = req.body;
    if (companyId > 0) {
      await postReviewSchema.validateAsync({
        reviewContent, rate, isAnonymous,
      });
      const { rowCount } = await checkReviewByIdQuery(employeeId);
      if (!rowCount) {
        await postReviewQuery(companyId, employeeId, reviewContent, rate, isAnonymous);
        res.json({ message: 'Review Added Successfully' });
      } else {
        res.status(405).json({ Error: 'You can\'t add more than one review' });
      }
    } else {
      res.status(400).json({ Error: 'Bad Request' });
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ Error: error.details[0].message });
    } else {
      next(error);
    }
  }
};
