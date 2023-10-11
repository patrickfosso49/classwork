import { StudentInterface } from "../model/StudentInterface";
import { StudentRepository } from "../repository/StudentRepository";


export class StudentService {


    constructor(private readonly studentRepository: StudentRepository) {
    }

    addStudent ( student: StudentInterface) {
        this.studentRepository.addStudent(student);
    }
        

}