const mysql = require('mysql2');

require('dotenv').config();

const database = mysql.createConnection({
	host: "host.docker.internal",
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
});

module.exports = database;
