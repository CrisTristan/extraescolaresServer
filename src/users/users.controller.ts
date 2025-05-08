import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './entity/user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UserService){}

    @Get()
    findAll(): Promise<User[]>{
        return this.userService.findAll();
    }

    @Post()
    create(@Body() user: Partial<User>): Promise<User>{
        return this.userService.create(user);
    }
}
