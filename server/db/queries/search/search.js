const connetion = require('../../config/connection');

const getDataCompany = (query, location) => connetion.query(
  'SELECT * FROM company WHERE name LIKE $1 or location LIKE $2;',
  [query, location],
);

const getMoreRandomCOmpany = (table, countMore) => connetion.query(
  `SELECT * FROM ${table} order by random() limit $1;`,
  [countMore],
);

const getDataJobs = (query, category, salary, date, location) => connetion.query(
  'SELECT * FROM jobs WHERE title LIKE $1 or category LIKE $2 or salary LIKE $3 or date LIKE $4 or location LIKE $5;',
  [query, category, salary, date, location],
);
const searchQuery = async ({
  query, type, rate, category, date, salary, location,
}) => {
  if (type === 'company') {
    let countMore = 16;
    const tableSearch = await getDataCompany(query, location);
    countMore -= tableSearch.rows.length;
    const randomMOre = await getMoreRandomCOmpany('company', countMore);
    return [
      ...tableSearch.rows,
      ...randomMOre.rows,
    ];
  }
  if (type === 'jobs') {
    let countMore = 16;
    const tableSearch = await getDataJobs(query, category, salary, date, location);
    countMore -= tableSearch.rows.length;
    const randomMOre = await getMoreRandomCOmpany('jobs', countMore);
    return [
      ...tableSearch.rows,
      ...randomMOre.rows,
    ];
  }
};
module.exports = searchQuery;
