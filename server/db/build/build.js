const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('../config/connection');

const dbBuild = () => {
  let sql = readFileSync(join(__dirname, 'employee.sql')).toString();
  sql += readFileSync(join(__dirname, 'fake-data', 'employee.sql')).toString();
  return connection.query(sql);
};

module.exports = dbBuild;
