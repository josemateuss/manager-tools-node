module.exports = function(application){
	application.get('/cadastrar-ferramentas', function(request, response){
		response.render("admin/form_add_ferramentas")
	});
};