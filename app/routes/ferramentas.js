module.exports = function(app){
	app.get('/ferramentas', function(request, response){ 
		response.render("ferramentas/ferramentas")
	});
};