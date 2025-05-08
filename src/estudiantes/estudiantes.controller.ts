import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { StudentsService } from "./estudiantes.service";
import { CreateStudentDto } from "./dto/create-student.dto";

@Controller()
export class EstudiantesController{
 
    studentService:StudentsService;
    
    constructor(estudiantesService:StudentsService){
        this.studentService= estudiantesService;
    }

    @Get('/students')
    getAllStudents(){

        //buscar en una bd
        //peticion a otro backend o api
        return this.studentService.getStudents();
    }

    @Get('/student/:id')
    getOneStudent(@Param('id') id: string){
        console.log(id);
        return this.studentService.getOneStudent(parseInt(id));
    }

    @Get('/student')
    getStudent(@Query('id') query: any){
        console.log(query);
        return "Estidiante con id "+query;
    }

    @Post('/student')
    @UsePipes(new ValidationPipe())
    createStudent(@Body() student : CreateStudentDto){
        return this.studentService.createStudent(student);
    }
}