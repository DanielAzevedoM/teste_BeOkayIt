import { getRepository,  } from 'typeorm';
import { Empresa as EmpresaEntity } from '../models/empresa.entity';

export class CalculoService { 

    /*Service que faz o calculo com base nos dias uteis. OBS: Ao colocar a data, só conseguir fazer funcionar 
    os comandos de data, se cadastrar a data com o valor da hora acima de 0, se não ele conta o dia anterior*/
    async calculo(cnpj: string, data_inicio: string, data_fim: string): Promise<Number| Error>{
        const empresaRepository = getRepository(EmpresaEntity);

        const empresa = await empresaRepository.findOne({ cnpj });

        if(!empresa) return new Error("Empresa not exists");

        const convertStartToDate = new Date(data_inicio);
        
        const convertEndToDate = new Date(data_fim);
        
                console.log(data_inicio, data_fim)

        const getStartDay = convertStartToDate.getDate();

        const getEndDay = convertEndToDate.getDate();

        const currentStartMonth = convertStartToDate.getMonth(); 
        
        //Pega os dias entre as datas informadas
        const dias = getEndDay - getStartDay - 2;

        const diasUteis = [22, 17, 22, 19, 20, 20, 21, 21, 21, 20, 19, 21]

        let feriados = diasUteis[currentStartMonth] - dias;
        
        if (feriados < 0) {
            feriados = feriados * -1;
        }
      
        let calculo = dias - feriados;

        let valorHora = 8 * empresa.valor_hora

        const result = valorHora * calculo
        
        return result;
    }
}