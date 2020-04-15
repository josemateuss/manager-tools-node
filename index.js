const express = require('express');
const bodyParser = require('body-parser');

const homeRoute = require('./app/routes/home');
const toolRoute = require('./app/routes/ferramentas');
const admRoute = require('./app/routes/admin');

const server = express();

server.use(bodyParser.urlencoded({extended : true}))

server.set('view engine', 'ejs');

server.set('views', './app/views');

server.use(homeRoute);
server.use(toolRoute);
server.use(admRoute);

server.listen(3000, () => {
    console.log("Ouvindo na porta 3000")
})