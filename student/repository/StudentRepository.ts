import mongoose from "mongoose";
import { Student } from "../model/Student";
import { StudentInterface } from "../model/StudentInterface";

export class StudentRepository {

    constructor( private readonly student: mongoose.Model<Student> ) {
    }

    addStudent(student: StudentInterface) {
    return this.student.create(student);
  }

    findAll() {
        return this.student.find();
    }

    async findStudentById(id: string) {
    return await this.student.findById(id);
  }

}


