module.exports = function(app){
	app.get('/cadastrar-ferramentas', function(request, response){
		response.render("admin/form_add_ferramentas")
	});
};