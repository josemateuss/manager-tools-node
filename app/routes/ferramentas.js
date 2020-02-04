//var dbConnection = require('../../settings/dbConnection');

module.exports = function(application){

	application.get('/ferramentas', function(request, response){ 

		// como a função recebe application como parâmetro, é possivel acessar a conexão com o BD
		var connection = application.settings.dbConnection(); //referência que faz a conexão com o banco
		// acessando a conexão com o BD pelo caminho da aplicação
		var ferramentasModel = application.app.models.ferramentasModel;

		ferramentasModel.getFerramentas(connection, function(error, result){
			response.render("ferramentas/ferramentas", {ferramentas : result})
		});

		//connection.query('select * from ferramentas;', 
	});
};