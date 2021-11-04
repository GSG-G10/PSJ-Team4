const connection = require('../../config/connection');

module.exports = async (id) => {
  const { rows } = await connection.query('SELECT * FROM review WHERE company_id = $1', [id]);
  return rows[0];
};
