import { MongoClient, ObjectId } from "mongodb"

const Client = new MongoClient("mongodb://localhost:27017")
const db = Client.db("AH20232CP1")

export async function getUsuarios(){
    await Client.connect();
    return db.collection("usuarios").find().toArray()
}

export async function agregarUsuario(usuario){
    await Client.connect()
    await db.collection("usuarios").insertOne(usuario)
    return usuario
}

export async function borrarUsuario(id){
    await Client.connect()
    return db.collection("usuarios").updateOne( {_id: ObjectId.createFromHexString(id)}, { $set: {eliminado: true} } )
}

export async function agregarCarrito(idUsuario, ropa){
    await Client.connect()
    const ropaCompleto = await db.collection( "Ropa" ).findOne({ _id: ObjectId.createFromHexString(ropa._id) })
    
    const resultado = await db.collection("usuarios").updateOne(
        { _id: ObjectId.createFromHexString(idUsuario) },
        { $push: {carrito: ropaCompleto} }
    )

    return resultado.modifiedCount > 0 ? "Producto agregado" : "No se pudo agregar producto "
}