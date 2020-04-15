const mysql = require('mysql');

const connectionMySQL = function() {
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'root',
		database : 'manager_tools'
	});
};
	
module.exports = connectionMySQL;

// exportando apenas a variável para que o servidor não fique criando inúmeras conexões com o banco de dados