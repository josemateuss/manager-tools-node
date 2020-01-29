// biblioteca do servidor http
var http = require('http');

console.log("Criando um sistema de ferramentas para Oficina.");

var server;

//criando um servidor com requisição e resposta
server = http.createServer(function(require, response){

	response.end("<html><body>Sistema de Controle de Ferramentas</body></html>")

});

//servidor escutando na porta 3000
server.listen(3000);