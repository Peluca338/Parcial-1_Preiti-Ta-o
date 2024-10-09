import * as servicios from "../../services/usuarios.service.js"

export function getUsuarios(req, res){
    const filtros = req.query
    servicios.getUsuarios(filtros)
        .then( (Ropa) => res.status(200).json(Ropa) )
}

export function agregarUsuario(req, res){
    const usuario = req.body
    servicios.agregarUsuario(usuario)
        .then( (usuario) => res.status(201).json(usuario) )
        .catch( () => res.status(404).json({ mensaje: "No se pudo agregar" }) )
}

export function borrarUsuario(req, res){
    const id = req.params.id
    servicios.borrarUsuario(id)
        .then( () => res.status(204).json({mensaje: "usuario eliminado"}) )
        .catch( () => res.status(404).json( { mensanje: "no se pudo eliminar" } ) )
}

export function agregarCarrito(req, res){
    const usuario = req.params.idUsuario
    const Ropa = req.body
    console.log("LLEGUE", usuario)
    servicios.agregarCarrito(usuario, Ropa)
        .then( usuario => res.status(201).json(usuario) )
        .catch( () => res.status(404).json({ mensaje: "No se pudo agregar a carrito" }) )
}