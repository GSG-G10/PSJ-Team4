const searchQuery = require('../db/queries/search/search');

const search = async (req, res, next) => {
  try {
    const data = await searchQuery(req.body);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = { search };
