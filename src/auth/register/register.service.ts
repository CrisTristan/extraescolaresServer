import { Injectable } from '@nestjs/common';
import { User, TipoUsuario } from 'src/interfaces/User';

@Injectable()
export class RegisterService {

    RegisterUser(): User[]{
        return [
            {
                nombre: 'Cris',
                apellidos: 'Abad mendieta',
                correo: 'cris@gmail.com',
                telefono: '9983787878',
                matricula: '22530213',
                contraseña: '12345',
                tipoUsuario: TipoUsuario.alumno,
            }
        ]
    }
}
