var app = require('./settings/server');

var homeRoute = require('./app/routes/home')(app); // passando o app por parâmetro
var toolsRoute = require('./app/routes/ferramentas')(app); 
var alicatesRoute = require('./app/routes/alicates')(app);
var addToolsRoute = require('./app/routes/cadastrar-ferramentas')(app);

/*app.get('/estoque', function(request, response){ 
	response.send("<html><body>Estoque de Ferramentas</body></html>")
});*/

// escutando na porta 3000
app.listen(3000, function(){
	console.log("Servidor rodando com Express");
	// console.log(message()); // como o módulo exporta uma função, devemos chamar como função
});