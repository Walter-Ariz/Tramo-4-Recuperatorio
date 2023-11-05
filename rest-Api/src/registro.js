import {pool} from './database.js';

class archivosController {

	async getAll(req,res){
		try {
			const [Libros] = await pool.query('SELECT * From libros');
			const [Usuarios] = await pool.query('SELECT * FROM usuarios');

		res.json({Libros, Usuarios });
	} catch (error){ res.json({"Error": error.message});
}
    }
}
export const archivo = new archivosController();
