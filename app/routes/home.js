module.exports = function(application){ 
	// get do Express serve para passar a rota da url
	application.get('/', function(request, response){
		response.render("home/index")
	});
};