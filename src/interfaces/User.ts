export interface User {
    nombre: string,
    apellidos: string,
    correo: string,
    telefono: string,
    matricula: string,
    contraseña: string,
    tipoUsuario: TipoUsuario
}

export enum TipoUsuario{
    'alumno',
    'profesor',
    'admin'
}

export interface Student{
    id: number,
    nombre: string,
    apellidos: string,
    correo: string,
    telefono: string,
    matricula: string,
    semestre: number,
    selectivo: boolean
}