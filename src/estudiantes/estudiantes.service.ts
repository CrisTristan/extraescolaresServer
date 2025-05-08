import { Injectable, NotFoundException } from "@nestjs/common"
import { Student } from "src/interfaces/User";

@Injectable()
export class StudentsService {
    private students: Student[] = [];

    getStudents(){
        return this.students;
    }

    getOneStudent(id: number){
        const studentFound = this.students.find(student => student.id === id);

        if(!studentFound){
            return new NotFoundException('No se encontro el estudiante');
        }

        return studentFound;
    }
    createStudent(student: Student){
        console.log(student);
        this.students.push({
            ...student,
            id: this.students.length +1
        })
        return student;
    }

}