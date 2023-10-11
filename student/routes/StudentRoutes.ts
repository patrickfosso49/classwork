import { NextFunction, Request, Response, Router } from 'express';
import { StudentController } from '../controller/StudentController';

export class StudentRoutes {
	private readonly router : Router
  constructor(private readonly studentController: StudentController,
		){
			this.router = Router();
    		this.#initializeRoutes();
	}


  #initializeRoutes() {
    this.router.post('/', this.#createStudent.bind(this));
  }

  #createStudent(req: Request, res: Response, next: NextFunction) {
    // Delegate the request handling to the controller
    this.studentController.addStudent(req, res, next);
  }

  public getRouter(): Router {
    return this.router;
  }


}

