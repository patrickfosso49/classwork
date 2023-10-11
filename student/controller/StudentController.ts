import { NextFunction, Request, Response } from "express";
import { StudentInterface } from "../model/StudentInterface";
import { StudentService } from "../service/StudentService";


export class StudentController {

    constructor(private readonly studentService : StudentService) {
    }



    addStudent(req: Request<{}, {}, StudentInterface>, res: Response, next: NextFunction) {

        var student: StudentInterface = req.body;
        
        this.studentService.addStudent(student);

        res.send("created");
    }
}