const { Pool } = require('pg');
const databaseConfiguration = require('./secrets/databaseConfiguration');

const pool = new Pool(databaseConfiguration);

module.exports = pool;

// // test
// pool.query('SELECT * FROM generation', (error, response) => {
//   if (error) return console.log('error');
//   console.log('response.row', response.rows);
// });
