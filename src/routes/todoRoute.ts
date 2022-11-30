import express from 'express';
import {createTodo, deleteTask, getAllTasks, getSingleTask, updateTask} from '../controller/todoController';

const router = express.Router();

router.post('/create', createTodo);

router.get('/all', getAllTasks);

router.get('/:id', getSingleTask);

router.patch('/:id', updateTask);

router.delete('/:id', deleteTask);







export default router;