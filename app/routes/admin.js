const express = require('express');
const connection = require('../helpers/dbConnection');
const FerramentasDAO = require('../models/FerramentasDAO');
const router = express.Router();

router.get('/cadastrar-ferramentas', (req, res) => {

	res.render("admin/form_add_ferramentas");
});

router.post('/ferramentas/salvar', (req, res) => {
	const tool = req.body;
	const model = new FerramentasDAO(connection);
	
	model.salvarFerramenta(tool, (error, result) =>{
		res.redirect('/ferramentas');
	});
});

module.exports = router;