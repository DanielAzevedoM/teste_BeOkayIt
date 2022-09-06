import { getRepository } from 'typeorm';
import { Empresa } from '../interfaces/empresa.interface';
import { Empresa as EmpresaEntity } from '../models/empresa.entity';
import consultarCNPJ from 'consultar-cnpj'; 

export class EmpresaService { 
   
    async create(empresa: Empresa): Promise<EmpresaEntity| Error>{
        const empresaRepository = getRepository(EmpresaEntity)
    
        let reg = /^[0-9]+$/;
        
        let onlyNumbers = empresa.cnpj.match(reg)

        if(onlyNumbers == null) return new Error("Only number in cnpj")

        try{
            await consultarCNPJ(empresa.cnpj)
        } catch {
            return new Error("Cnpj not exists")
        }

        const checkEmpresaExists = await empresaRepository.findOne({ cnpj: empresa.cnpj})
        
        if(checkEmpresaExists) return new Error("Cnpj already exits!")

        const result = await empresaRepository.save({...empresa});

        return  result;
    }

   
}
    

    
