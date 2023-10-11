"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
class StudentService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    addStudent(student) {
        this.studentRepository.addStudent(student);
    }
}
exports.StudentService = StudentService;
