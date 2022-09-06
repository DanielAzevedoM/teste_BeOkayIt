import { Router } from "express";
import { CalculoController } from "../controllers/calculo.controller";

const calculoRoutes = Router();
const calculoController = new CalculoController();

calculoRoutes.post('/calculo', calculoController.calculo)

export { calculoRoutes }



