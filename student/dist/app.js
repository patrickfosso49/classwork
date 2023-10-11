"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = require("path");
require('dotenv').config();
const mongoose_1 = __importDefault(require("mongoose"));
const StudentController_1 = require("./controller/StudentController");
const Student_1 = require("./model/Student");
const StudentRepository_1 = require("./repository/StudentRepository");
const StudentRoutes_1 = require("./routes/StudentRoutes");
const index_1 = __importDefault(require("./routes/index"));
const StudentService_1 = require("./service/StudentService");
var app = (0, express_1.default)();
mongoose_1.default
    .connect(process.env.CONNECTION_STRING)
    .then(() => {
    // view engine setup
    app.set('views', (0, path_1.join)(__dirname, 'views'));
    app.set('view engine', 'jade');
    app.use((0, morgan_1.default)('dev'));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use((0, cookie_parser_1.default)());
    app.use(express_1.default.static((0, path_1.join)(__dirname, 'public')));
    const studentRespository = new StudentRepository_1.StudentRepository(Student_1.student);
    const studentService = new StudentService_1.StudentService(studentRespository);
    const studentController = new StudentController_1.StudentController(studentService);
    const studentRoutes = new StudentRoutes_1.StudentRoutes(studentController);
    app.use('/', index_1.default);
    app.use('/students', studentRoutes.getRouter());
    // catch 404 and forward to error handler
    app.use((req, res, next) => {
        next((0, http_errors_1.default)(404));
    });
    // error handler
    app.use((err, req, res, next) => {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });
    console.log('Connected to MongoDB');
    // Start the server after successfully connecting to the database
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
    .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
exports.default = app;
