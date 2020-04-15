const express = require('express');
const connection = require('../helpers/dbConnection');
const FerramentasDAO = require('../models/FerramentasDAO');
const router = express.Router();

router.get('/ferramentas', (req, res) => {

	const model = new FerramentasDAO(connection);

	model.getFerramentas(function (error, result) {
		res.render("ferramentas/ferramentas", { ferramentas: result })
	});
});

module.exports = router;