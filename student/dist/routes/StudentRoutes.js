"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _StudentRoutes_instances, _StudentRoutes_initializeRoutes, _StudentRoutes_createStudent;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoutes = void 0;
const express_1 = require("express");
class StudentRoutes {
    constructor(studentController) {
        _StudentRoutes_instances.add(this);
        this.studentController = studentController;
        this.router = (0, express_1.Router)();
        __classPrivateFieldGet(this, _StudentRoutes_instances, "m", _StudentRoutes_initializeRoutes).call(this);
    }
    getRouter() {
        return this.router;
    }
}
exports.StudentRoutes = StudentRoutes;
_StudentRoutes_instances = new WeakSet(), _StudentRoutes_initializeRoutes = function _StudentRoutes_initializeRoutes() {
    this.router.post('/', __classPrivateFieldGet(this, _StudentRoutes_instances, "m", _StudentRoutes_createStudent).bind(this));
}, _StudentRoutes_createStudent = function _StudentRoutes_createStudent(req, res, next) {
    // Delegate the request handling to the controller
    this.studentController.addStudent(req, res, next);
};
