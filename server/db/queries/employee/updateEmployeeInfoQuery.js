const connection = require('../../config/connection');

module.exports = (firstName, lastName, email, location, status) => connection.query(
  `
    UPDATE employee SET 
    first_name = $2, 
    last_name = $3, 
    email = $4, 
    location = $5, 
    status = $6 
    WHERE id = $1
    RETURNING *
`,
  [firstName, lastName, email, location, status],
);
