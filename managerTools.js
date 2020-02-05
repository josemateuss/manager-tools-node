var application = require('./settings/server');

/*var homeRoute = require('./app/routes/home')(application); // passando a application por parâmetro
var toolsRoute = require('./app/routes/ferramentas')(application); 
var alicatesRoute = require('./app/routes/alicates')(application);
var addToolsRoute = require('./app/routes/cadastrar-ferramentas')(application);*/

/*application.get('/estoque', function(request, response){ 
	response.send("<html><body>Estoque de Ferramentas</body></html>")
});*/

// escutando na porta 3000
application.listen(3000, function(){
	console.log("Servidor rodando com Express");
	// console.log(message()); // como o módulo exporta uma função, devemos chamar como função
});