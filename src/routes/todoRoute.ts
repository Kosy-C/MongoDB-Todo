import express from 'express';
import {createTodo, getAllTasks, getSingleTask} from '../controller/todoController';

const router = express.Router();

router.post('/create', createTodo);

router.get('/all', getAllTasks);

router.get('/:id', getSingleTask);

router.update('/:id', getSingleTask);

router.delete('/:id', getSingleTask);







export default router;