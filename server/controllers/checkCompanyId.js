const { checkCompanyIdQuery } = require('../db/queries/company');

const checkCompanyId = async (id) => {
  const checkCase = await checkCompanyIdQuery(id);
  return checkCase;
};

module.exports = checkCompanyId;
