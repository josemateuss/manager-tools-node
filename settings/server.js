var express = require('express');
var app = express();

// set serve para avisar pro Express que agora o engine view é feito pelo módulo EJS
app.set('view engine', 'ejs');
/* com os arquivos que estão na pasta views, escritos em .ejs com javascript, 
são processados pela engine e devolvem arquivos html */

app.set('views', './app/views')

// exportando o servidor
module.exports = app;