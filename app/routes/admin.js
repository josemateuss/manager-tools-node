module.exports = function(application){
	application.get('/cadastrar-ferramentas', function(request, response){
		response.render("admin/form_add_ferramentas");
	});

	application.post('/ferramentas/salvar', function(request, response){
		var ferramenta = request.body;

		var connection = application.settings.dbConnection(); 
		var ferramentasModel = application.app.models.ferramentasModel;

		ferramentasModel.salvarFerramenta(ferramenta, connection, function(error, result){
			//response.redirect('/ferramenta');
			response.render("ferramentas/ferramentas", {ferramentas : result})
		});
	});
};