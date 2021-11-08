const connection = require('../../config/connection');

module.exports = async (id) => {
  const { rows } = await connection.query(
    `SELECT 
CASE WHEN EXISTS 
( 
    SELECT * FROM employee WHERE id = $1
) THEN true ELSE false END `,
    [id],
  );
  return rows[0].case;
};
