import 'reflect-metadata';  
import express from 'express';
import { createConnection } from 'typeorm';
import { calculoRoutes } from './routes/calculo.routes';
import { empresaRoutes } from './routes/empresa.routes';
require('dotenv').config()


const app = express();

app.use(express.json());
app.use(empresaRoutes, calculoRoutes)

createConnection();

app.listen(3000, () => {
    console.log("Server On")
})


