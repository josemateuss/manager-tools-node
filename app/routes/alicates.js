module.exports = function(app){ // app é passado por parâmetro pois é necessário receber o app para atuar sobre
	app.get('/alicates', function(request, response){ 
		// render do ejs para renderizar a página em HTML
		response.render("categoria/alicates")
	});
};