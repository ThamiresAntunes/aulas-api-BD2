import express from 'express';
import { getTasks, createTask, findTask, deleteTask } from './controller/task-controller.js';

const app = express();
app.use(express.json());

app.get('/tasks', getTasks);
app.get('/task/:id', findTask);
app.post('/tasks', createTask);
app.delete('/task/:id', deleteTask);

const porta = 3000;

app.listen(porta, () => {
  console.log(`App esta rodando na porta ${porta}`)
});