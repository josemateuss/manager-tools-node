class FerramentasDAO{
	constructor(connection){
		this._connection = connection();
	}

	getFerramentas(callback){
		this._connection.query('select * from ferramentas;', callback);
	};

	salvarFerramenta(tool, callback){
		this._connection.query('insert into ferramentas set ? ', tool, callback);
	}
}

module.exports = FerramentasDAO;