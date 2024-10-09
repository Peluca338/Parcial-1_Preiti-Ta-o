import express from "express";
import * as controllers from "../controllers/productos.controlador.js"


const route = express.Router()

route.get("/", controllers.getRopa)
route.get("/ropas", controllers.getRopa)
route.get("/ropas/:id", controllers.getRopaId)
route.post("/ropas", controllers.crearRopa)
route.delete("/ropa/:id", controllers.borrarProducto)
route.put("/ropa/:id", controllers.reemplazarProducto)  

export default route