const connection = require('../../config/connection');

module.exports = (id, firstName, lastName, email, location, status) => connection.query(
  `
    UPDATE employee SET 
    first_name = $2, 
    last_name = $3, 
    email = $4, 
    location = $5, 
    status = $6 
    WHERE id = $1
    RETURNING first_name,last_name,email,location,status
`,
  [id, firstName, lastName, email, location, status],
);
