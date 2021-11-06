const { getCompanyReviewQuery } = require('../db/queries/company');

const checkCompanyId = require('./checkCompanyId');

const getCompanyReview = async (req, res, next) => {
  try {
    const { companyId } = req.params;
    const checkId = await checkCompanyId(companyId);
    if (companyId > 0 && checkId) {
      const reviews = await getCompanyReviewQuery(req.params.companyId);
      return res.json(reviews);
    }
    return res.status(400).json({ message: 'Invalid company' });
  } catch (error) {
    return next(error);
  }
};
module.exports = getCompanyReview;
