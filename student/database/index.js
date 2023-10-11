"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
var router = (0, express_1.Router)();
/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Hello world' });
});
exports.default = router;
