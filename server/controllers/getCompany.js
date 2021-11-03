const { getCompanyInfoQuery } = require('../db/queries/company');

module.exports = async (req, res, next) => {
  const { companyId } = req.params;
  try {
    const { rows: data } = await getCompanyInfoQuery(companyId);
    res.json({ data });
  } catch (err) {
    next(err);
  }
};
