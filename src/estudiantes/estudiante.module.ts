import {Module } from '@nestjs/common'
import { EstudiantesController } from './estudiantes.controller'
import { StudentsService } from './estudiantes.service'

@Module({
    controllers: [EstudiantesController],
    providers: [StudentsService]
})
export class EstudianteModulo {}