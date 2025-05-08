import {IsInt, IsString, IsBoolean, IsOptional, IsEmail} from 'class-validator';

export class CreateStudentDto{

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

    @IsInt()
    semestre: number

    @IsBoolean()
    selectivo: boolean
}