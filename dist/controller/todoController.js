"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getSingleTask = exports.getAllTasks = exports.createTodo = void 0;
const todoModel_1 = __importDefault(require("../model/todoModel"));
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Tasks = yield todoModel_1.default.create(req.body);
        res.status(200).json({
            message: "Tasks created successfully",
            data: { Tasks }
        });
    }
    catch (err) {
        res.status(500).json({
            Error: "Internal server Error",
            route: "/todo/create",
        });
    }
});
exports.createTodo = createTodo;
const getAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Tasks = yield todoModel_1.default.find();
        res.status(200).json({
            message: "Task retrieved",
            data: { Tasks }
        });
    }
    catch (err) {
        res.status(500).json({
            Error: "Internal server Error",
            route: "/todo/getAllTasks",
        });
    }
});
exports.getAllTasks = getAllTasks;
const getSingleTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: taskID } = req.params;
        const Task = yield todoModel_1.default.findOne({ _id: taskID });
        if (!Task) {
            return res.status(404).json({
                message: `No task with id:${taskID} found`
            });
        }
    }
    catch (err) {
        res.status(500).json({
            Error: "Internal server Error",
            route: "/todo/getSingleTask",
        });
    }
    res.json({ id: req.params.id });
});
exports.getSingleTask = getSingleTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: taskID } = req.params;
        const Tasks = yield todoModel_1.default.findOneAndUpdate({ _id: taskID }, req.body, {});
    }
    catch (err) {
        res.status(500).json({
            Error: "Internal server Error",
            route: "/todo/updateTask",
        });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        res.status(500).json({
            Error: "Internal server Error",
            route: "/todo/deleteTask",
        });
    }
});
exports.deleteTask = deleteTask;
