const connection = require('../../config/connection');


const getEmployeeById = (userId) =>{
    const sqlQuery = {
        text: "SELECT * FROM employee WHERE id = $1",
        values: [userId]
    };

    return connection.query(sqlQuery);
}


module.exports = getEmployeeById;
