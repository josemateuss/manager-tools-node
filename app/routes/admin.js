module.exports = function(application){
	application.get('/cadastrar-ferramentas', function(request, response){
		response.render("admin/form_add_ferramentas");
	});

	application.post('/ferramentas/salvar', function(request, response){
		var ferramenta = request.body;

		var connection = application.settings.dbConnection(); 
		var FerramentasDAO = new application.app.models.FerramentasDAO(connection);

		FerramentasDAO.salvarFerramenta(ferramenta, function(error, result){
			response.redirect('/ferramentas');
			//response.send(error);
			//response.render("ferramentas/ferramentas", {ferramentas : result})
		});
	});
};