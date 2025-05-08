import { Module } from '@nestjs/common';
import { EstudianteModulo } from './estudiantes/estudiante.module';
import { ProfesoresModulo } from './profesores/profesores.module';
import { UsersModule } from './users/users.module';
import { RegisterModule } from './auth/register/register.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'paraescolares',
    entities: [User],
    synchronize: true,
  }),
  EstudianteModulo, ProfesoresModulo, UsersModule, RegisterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
