"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRepository = void 0;
class StudentRepository {
    constructor(student) {
        this.student = student;
    }
    addStudent(student) {
        return this.student.create(student);
    }
    findAll() {
        return this.student.find();
    }
    findStudentById(uuid) {
        return this.student.findOne({ uuid });
    }
}
exports.StudentRepository = StudentRepository;
