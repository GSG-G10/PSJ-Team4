const connection = require('../../config/connection');

module.exports = (id) => connection.query(
  `
    SELECT 
    CASE WHEN EXISTS 
    ( 
        SELECT * FROM employee WHERE id = $1
    ) THEN true ELSE false END
`,
  [id],
);
