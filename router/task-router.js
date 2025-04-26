import express from 'express';
import { getTasks, findTask, createTask, updateTask, deleteTask } from '../controller/task-controller.js';

const TaskRouter = express.Router();

TaskRouter.get('/', getTasks);
TaskRouter.get('/:id', findTask);
TaskRouter.post('/', createTask);
TaskRouter.patch('/:id', updateTask);
TaskRouter.delete('/:id',deleteTask);


export default TaskRouter;