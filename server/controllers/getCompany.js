const { getCompanyInfoQuery } = require('../db/queries/company');

module.exports = async (req, res, next) => {
  const { companyId } = req.params;
  if (companyId > 0) {
    try {
      const { rows: data } = await getCompanyInfoQuery(companyId);
      res.json({ data });
    } catch (err) {
      next(err);
    }
  } else {
    res.status(400).json({ Error: 'Bad Request' });
  }
};
