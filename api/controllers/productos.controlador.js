import * as servicios from "../../services/productos.service.js"

function getRopa(req, res){
    const filtros = req.query
    servicios.getRopa(filtros).then((ropas) => res.status(200).json(ropas))
}
function getRopaId(req, res){
    const id = req.params.id
    service.getRopaId(id)
        .then((ropa) => res.status(200).json(ropa))
}
function crearRopa(req, res){
    const ropa = req.body
    service.agregarRopa(ropa)
        .then( (ropas) => res.status(201).json(ropas) )
}
function borrarProducto(req, res){
    const id = req.params.id
    console.log("LLEGO EL BORRAR", req.params.id)
    service.borrarProductoLogico(id)
        .then( () => res.status(204).json(id) )
        .catch( () => res.status(404).json({mensaje: "Recurso no encontrado"}) )
}

function reemplazarProducto(req, res){
    const id = req.params.id
    const zapatilla = req.body
    service.modificarZapatilla(id, zapatilla)
        .then( (zapatilla) => res.status(204).json(zapatilla) )
        .catch( () => res.status(404).json({mensaje: "Recurso no encontrado"}) )
}

function actualizarProducto(req, res){
    const id = req.params.id
    const zapatilla = req.body

    service.actualizarZapatilla(id, zapatilla)
    .then( (zapatilla) => res.status(204).json(zapatilla) )
    .catch( () => res.status(404).json({mensaje: "Recurso no encontrado"}) )

}



export { 
    getRopa,
    getRopaId,
    crearRopa,
}