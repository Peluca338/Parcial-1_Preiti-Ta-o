//Imports
import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';  

import RutasProductos from "./routes/productos.routes.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/img', express.static(path.join(__dirname, 'img')));

//Usos
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(RutasProductos);

app.listen(3333, () => console.log("¡Servidor encendido!"));
