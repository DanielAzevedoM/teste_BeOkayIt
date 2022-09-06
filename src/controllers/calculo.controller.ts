import { Request, Response } from "express";
import { CalculoService } from "../services/calculo.service";

const calculoService = new CalculoService();

class CalculoController {

    async calculo(req: Request, res: Response){
        const { cnpj, data_inicio, data_fim } = req.body;
      
        const result = await calculoService.calculo(cnpj, data_inicio, data_fim)

        return res.json({ valor_calculado: result })
      
    }
  
     
}

export { CalculoController }