import { Body, Controller, Get, Post, Put, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { RegisterService } from './register.service';
import {Request, Response} from 'express';
import { User } from 'src/interfaces/User';
import { registerUserDto } from './dto/registerUserDto';

@Controller()
export class RegisterController {

    constructor (private registerService: RegisterService){}

    @Post('/register')
    @UsePipes(new ValidationPipe())
    RegisterUser(@Body() user: registerUserDto, @Res() response:Response){
        
        console.log(user);
        response.status(200).json({
            message: 'Registrado Correctamente'
        })
    }

}
