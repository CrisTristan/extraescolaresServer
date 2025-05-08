import { TipoUsuario } from 'src/interfaces/User';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string
  
  @Column()
  apellidos: string
  
  @Column()    
  correo: string
  
  @Column()  
  telefono: string
  
  @Column()   
  matricula: string
  
  @Column()
  contraseña: string
     
  @Column({default: 'alumno'})
  tipoUsuario: TipoUsuario
  
  @Column() 
  semestre: number

  @Column()
  carrera: string

  @Column({ default: false})
  selectivo: boolean
}
