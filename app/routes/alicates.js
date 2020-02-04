module.exports = function(application){ 
	// application é passado por parâmetro pois é necessário receber o application para atuar sobre
	application.get('/alicates', function(request, response){ 
		// render do ejs para renderizar a página em HTML
		response.render("categoria/alicates")
	});
};