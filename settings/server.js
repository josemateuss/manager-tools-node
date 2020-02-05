var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var application = express();
// set serve para avisar pro Express que agora o engine view é feito pelo módulo EJS
application.set('view engine', 'ejs');
/* com os arquivos que estão na pasta views, escritos em .ejs com javascript, 
são processados pela engine e devolvem arquivos html */
application.set('views', './app/views')

application.use(bodyParser.urlencoded({extended : true}))

// utilizando o consign para o auto load de rotas e módulos no projeto
consign()
	.include('app/routes')
	.then('settings/dbConnection.js')
	.then('app/models')
	.into(application);

// exportando o servidor
module.exports = application;