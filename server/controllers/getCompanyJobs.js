const { getJobsQuery } = require('../db/queries/company');

const getCompanyJobs = async (req, res) => {
  const { id } = req.params;
  try {
    const results = await getJobsQuery(id);
    return results.length >= 1
      ? res.json(results)
      : res.status(404).json({ Message: 'There\'s no company' });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      message: 'Internal Server Error!',
    });
  }
};

module.exports = getCompanyJobs;
