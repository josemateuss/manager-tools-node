module.exports = function() {
	
	this.getFerramentas = function(connection, callback){
		connection.query('select * from ferramentas;', callback);
	};

	this.salvarFerramenta = function(ferramenta, connection, callback) {
		connection.query('insert into ferramentas set ? ', ferramenta, callback);
	};

	return this;
};