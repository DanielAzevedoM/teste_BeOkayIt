import { Request, Response } from 'express';

import { EmpresaService } from '../services/empresa.service';

const empresaService = new EmpresaService();

export class EmpresaController {

    //Rota para criar empresa.
    async create(request: Request, response: Response){
        const empresa = request.body;

        const result = await empresaService.create(empresa);

        if(result instanceof Error) return response.status(400).json(result.message);
    
        return response.json(result);

    }

}
