import { Router } from 'express';
import { libro } from './controller.js';
import { usuario } from './controller.js';
import { archivo } from './registro.js';

export const router = Router()
//
router.get('/',archivo.getAll);//Todos los registros


router.get('/libros',libro.getAll);//todos los libros
router.get('/libros/id',libro.getOne);//buscar libro por medio de id
router.post('/libros', libro.add);//agregar libro
router.delete('/libros',libro.delete);//eliminar datos
router.put('/libros', libro.update);//actualizar datos

router.get('/usuarios',usuario.getAll);//todos los usuarios
router.get('/usuarios/id_usuario',usuario.getOne);//buscar usuario por medio de id
router.post('/usuarios', usuario.add);//ingresar nuevo usaurio
router.delete('/usuarios',usuario.delete);//eliminar datos
router.put('/usuarios', usuario.update);//actualizar datos
