//Imports
import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';  

//Rutas
import RutasProductos from "./routes/productos.routes.js";
import ApiRoute from "./api/routes/productos.routes.js"
import ApiUsuario from "./api/routes/usuarios.routes.js"

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Usos
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(RutasProductos);
app.use("/api", ApiRoute);
app.use("/api", ApiUsuario);

app.listen(3333, () => console.log("¡Servidor encendido!"));
