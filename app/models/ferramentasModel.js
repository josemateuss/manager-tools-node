module.exports = function() {
	
	this.getFerramentas = function(connection, callback){
		connection.query('select * from ferramentas;', callback);
	};

	return this;
};