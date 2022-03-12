const { validationResult } = require('express-validator');
const database = require('../db');

const initDatabase = (req, res) => {
	const sqlQuery = 'CREATE TABLE IF NOT EXISTS emails(id int AUTO_INCREMENT, firstname VARCHAR(50), lastname VARCHAR(50), email VARCHAR(50), PRIMARY KEY(id))';

	database.query(sqlQuery, (err) => {
		if (err) throw err;

		res.send('Table created!')
	});
};

const getSubscribers = (req, res) => {
	const sqlQuery = 'SELECT * FROM emails';

	database.query(sqlQuery, (err, result) => {
		if (err) throw err;

		res.json({ 'emails': result });
	});
};

const addSubscriber = (req, res) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		console.log('errors' + errors);

		res.send(errors.array());
	}
	else {
		const subscriber = {
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email
		};

		console.log(subscriber);

		const sqlQuery = 'INSERT INTO emails SET ?';

		database.query(sqlQuery, subscriber, (err, row) => {
			if (err) throw err;

			res.send('Subscribed successfully!');
		});
	}
};

module.exports = {
	initDatabase,
	getSubscribers,
	addSubscriber
}