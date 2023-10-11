"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    addStudent(req, res, next) {
        var student = req.body;
        this.studentService.addStudent(student);
        res.send("created");
    }
}
exports.StudentController = StudentController;
