const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'prueba',
  password: '12345',
  port: 5432, 
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};