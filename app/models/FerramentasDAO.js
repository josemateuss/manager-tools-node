function FerramentasDAO(connection) {
	this._connection = connection;
}

FerramentasDAO.prototype.getFerramentas = function(callback){
	this._connection.query('select * from ferramentas;', callback);
};

FerramentasDAO.prototype.salvarFerramenta = function(ferramenta, callback) {
	this._connection.query('insert into ferramentas set ? ', ferramenta, callback);
};

module.exports = function() {
	return FerramentasDAO;
};

//criando classes orientadas a objetos em JS

/*
this.getFerramentas = function(connection, callback){
	connection.query('select * from ferramentas;', callback);
};
*/
// antes de mudar para classes, ficava assim
// agora a própria connection é passada por parâmetro na classe
// o DAO é usado para integrar o banco com os objetos do sistema
// porém os DAOs não são muito utilizados hoje em dia