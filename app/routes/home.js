module.exports = function(app){ 
	// get do Express serve para passar a rota da url
	app.get('/', function(request, response){
		response.render("home/index")
	});
};