import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() 
export class Empresa  {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique:true, nullable: false})
  cnpj: string;

  @Column({type: "varchar", length: 50 })
  nome: string;

  @Column({ type: 'float' })
  valor_hora: number;

  @Column({ default: null})
  data_fundacao: Date;
}
