"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoController_1 = require("../controller/todoController");
const router = express_1.default.Router();
router.post('/create', todoController_1.createTodo);
router.get('/all', todoController_1.getAllTasks);
router.get('/:id', todoController_1.getSingleTask);
router.patch('/:id', todoController_1.updateTask);
router.delete('/:id', todoController_1.deleteTask);
exports.default = router;
