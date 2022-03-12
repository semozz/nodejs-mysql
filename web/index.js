const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

const routes = require('./src/routes/routes');

app.use(express.json());
app.use(routes);

app.listen(9898, () => {
	console.log('Server running!');
})
