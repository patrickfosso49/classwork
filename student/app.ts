import cookieParser from 'cookie-parser';
import express, { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import logger from 'morgan';
import { join } from 'path';

require('dotenv').config({ path: "/config/.env" });

import mongoose from 'mongoose';
import { exit } from 'process';
import { StudentController } from './controller/StudentController';
import { student } from './model/Student';
import { StudentRepository } from './repository/StudentRepository';
import { StudentRoutes } from './routes/StudentRoutes';
import indexRouter from './routes/index';
import { StudentService } from './service/StudentService';

var app = express();


mongoose
  .connect(process.env.CONNECTION_STRING!)
  .then(() => {
    // view engine setup
    app.set('views', join(__dirname, 'views'));
    app.set('view engine', 'jade');

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(join(__dirname, 'public')));



    const studentRespository = new StudentRepository(student);
    const studentService = new StudentService(studentRespository);
    const studentController = new StudentController(studentService);

    const studentRoutes = new StudentRoutes(studentController);





    app.use('/', indexRouter);
    app.use('/students', studentRoutes.getRouter());

    // catch 404 and forward to error handler
    app.use((req, res, next) => {
      next(createError(404));
    });


    // error handler
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      console.log(err);
      res.render('error');
    });

    console.log('Connected to MongoDB');

    app.listen(process.env.PORT, () => {
      console.log('Server is running on port ' + process.env.PORT + ' ...');
      console.log(process.env);
    });
  })
  .catch((error) => {

    console.error('Error connecting to MongoDB:', error);
    exit(1);
  });



export default app;
