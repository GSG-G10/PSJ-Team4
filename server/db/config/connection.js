const { Pool } = require('pg');

const { DEV_DB_URL, TEST_DB_URL, DATABASE_URL } = process.env;
let dbUrl = '';

switch (process.env.NODE_ENV) {
  case 'test':
    dbUrl = TEST_DB_URL;
    break;
  case 'development':
    dbUrl = DEV_DB_URL;
    break;
  case 'production':
    dbUrl = DATABASE_URL;
    break;
  default:
    throw new Error('DATA BASE ERROR');
};

const options = {
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false,
  },
};


module.exports = new Pool(options);
