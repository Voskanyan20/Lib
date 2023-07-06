// const Sequelize = require('sequelize');

// // Source database configuration
// const sourceDB = new Sequelize('postgres', 'postgres', 'postgres', {
//     host: 'localhost',
//     dialect: 'postgres',
//     port : 5432
// });

// // Destination database configuration
// const destinationDB = new Sequelize('postgres1', 'postgres', 'postgres', {
//     host: 'localhost',
//     dialect: 'postgres',
//     port : 5432
// });

// module.exports = { sourceDB, destinationDB };

const { Client } = require('pg');

const sourceClient = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: '5432',
});

const destinationClient = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres1',
  password: 'postgres',
  port: '5432',
});

module.exports = { sourceConfig, destinationConfig };
