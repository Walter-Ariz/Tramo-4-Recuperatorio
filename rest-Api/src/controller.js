import {pool} from './database.js';


/// Controlador de los libros

class LibroController{

	


	///todos los usuarios
	async getAll(req,res){
		try {
			const [Libros] = await pool.query('SELECT * From libros');
		res.json({Libros });
	} catch (error){ res.json({"Error": error.message});

}
	}
///buscar libro por medio del ID
	async getOne(req,res){ 
		try{
		const libro = req.body;
		const id_libro = parseInt(libro.id);
		const [result] = await pool.query(`select * from libros WHERE id=?`, [id_libro] );
		
		if (result[0]!=undefined){
			res.json(result);
		} else{
			res.json({"Error":"El libro que busca no existe"});
		}
		}catch(e) {
			console.log(e);
		}
	}

	///agregar libro 
    async add(req, res) {
		try {
		const libro = req.body;
		const [result] = await pool.query(`INSERT INTO libros(nombre, autor, categoria, año, ISBN, id) VALUES (?, ?, ?, ? ,? ,?)`,[libro.nombre, libro.autor, libro.categoria, libro.año, libro.ISBN, libro.id]);
		res.json({"Libro Agregado": result.insertId});
		} catch (error){ res.json({"Error, compruebe bien los datos a ingresar": error.message});

	}
	}

	///eliminar libro por medio de ID
	async delete(req,res){
		try{
		const libro = req.body;
		const [result] = await pool.query (`DELETE FROM libros WHERE id=(?)`, [libro.id]);
		res.json({"Libro eliminado": result.affectedRows});
		} catch (error){ res.json({"Error": error.message});

		}
	}

///actualizar libro
	async update(req,res){
		try {
		const libro = req.body;
		const [result] = await pool.query(`UPDATE libros SET nombre =(?), autor=(?), categoria=(?), año=(?), ISBN=(?) WHERE id=(?)`,[libro.nombre, libro.autor, libro.categoria, libro.año, libro.ISBN, libro.id]);
		res.json({"Libros actualizados": result.changedRows});
	} catch (error){ res.json({"Error en la Actualizacion de datos": error.message});

}
	
	}
	

}
export const libro = new LibroController();

/// controlador de los usuarios
class UsuarioController {

///todos los usuarios
	async getAll(req,res){
		try {
			const [Usuarios] = await pool.query('SELECT * FROM usuarios');

		res.json({Usuarios});
	} catch (error){ res.json({"Error": error.message});

}

	}
///buscar usario por medio de su id
	
	async getOne(req,res){ 
		try{
		const usuario = req.body;
		const user = parseInt(usuario.id_usuario);
		const [result] = await pool.query(`select * from usuarios WHERE id_usuario=?`, [user] );
		
		if (result[0]!=undefined){
			res.json(result);
		} else{
			res.json({"Error":"El usuario que busca no existe"});
		}
		}catch(e) {
			console.log(e);
		}
	}

	///agregar usuario 
    async add(req, res) {
		try {
		const usuario = req.body;
		const [result] = await pool.query(`INSERT INTO usuarios(nombre, apellido, usuario, email, pass, perfil_id, baja, id_usuario) VALUES (?, ?, ?, ? ,? ,? ,? ,?)`,[usuario.nombre, usuario.apellido, usuario.usuario ,usuario.email, usuario.pass, usuario.perfil_id, usuario.baja, usuario.id_usuario]);
		res.json({"Usuario Agregado": result.insertId});
		} catch (error){ res.json({"Error, compruebe bien los datos a ingresar": error.message});

	}
	}
	///eliminar usuario por medio de id
	async delete(req,res){
		try{
		const usuario = req.body;
		const [result] = await pool.query (`DELETE FROM usuarios WHERE id_usuario=(?)`, [usuario.id_usuario]);
		res.json({"Usuario eliminado": result.affectedRows});
		} catch (error){ res.json({"Error": error.message});

		}
	}

///actualizar usuario
	async update(req,res){
		try {
		const usuario = req.body;
		const [result] = await pool.query(`UPDATE usuarios SET nombre =(?), apellido=(?), usuario=(?), email=(?), pass=(?) , perfil_id=(?), baja=(?) WHERE id_usuario=(?)`,[usuario.nombre, usuario.apellido, usuario.usuario, usuario.email, usuario.pass, usuario.baja , usuario.perfil_id, usuario.id_usuario]);
		res.json({"Usuario actualizado": result.changedRows});
	} catch (error){ res.json({"Error en la Actualizacion de datos": error.message});

}
	
	}



}
export const usuario = new UsuarioController();

class usuario_libroController {

}