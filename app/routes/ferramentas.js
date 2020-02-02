module.exports = function(app){

	app.get('/ferramentas', function(request, response){ 
		var mysql = require('mysql');
		var connection = mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'root',
			database : 'manager_tools'
		});

		connection.query('select * from ferramentas;', function(error, result){
			response.render("ferramentas/ferramentas", {ferramentas : result})
		});
	});
};