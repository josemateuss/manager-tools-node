var express = require('express');
var app = express();

// set serve para avisar pro Express que agora o engine view é feito pelo módulo EJS
app.set('view engine', 'ejs')
/* com os arquivos que estão na pasta views, escritos em .ejs com javascript, 
são processados pela engine e devolvem arquivos html */

// get do Express serve para passar a rota da url
app.get('/', function(request, response){
	response.send("<html><body>Sistema de Controle de Ferramentas</body></html>")
});

app.get('/estoque', function(request, response){ 
	response.send("<html><body>Estoque de Ferramentas</body></html>")
});

app.get('/alicates', function(request, response){ 
	// render do ejs para renderizar a página em HTML
	response.render("categoria/alicates")
});

// escutando na porta 3000
app.listen(3000, function(){
	console.log("Servidor rodando com Express");
});