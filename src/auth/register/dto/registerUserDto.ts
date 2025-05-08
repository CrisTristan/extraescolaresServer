import {IsInt, IsString, IsBoolean, IsOptional, IsEmail, IsEnum} from 'class-validator';
import { TipoUsuario } from 'src/interfaces/User';

export class registerUserDto{

    @IsString()
    @IsOptional()
    id: number

    @IsString()
    nombre: string

    @IsString()
    apellidos: string

    @IsString()
    @IsEmail()
    correo: string

    @IsString()
    telefono: string

    @IsString()
    matricula: string

    @IsString()
    contraseña: string
    
    @IsEnum(TipoUsuario, {message : "tipo usuario debe ser alumno, profesor o admin"})
    tipoUsuario: TipoUsuario

    @IsInt()
    semestre: number

    @IsString()
    carrera: string

    @IsBoolean()
    @IsOptional()
    selectivo: boolean
}