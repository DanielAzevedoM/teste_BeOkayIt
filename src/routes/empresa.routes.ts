import { Router } from "express";
import { EmpresaController } from "../controllers/empresa.controller";

const empresaRoutes = Router();
const empresaController = new EmpresaController();

empresaRoutes.post('/empresas', empresaController.create)


export { empresaRoutes }



