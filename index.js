import express from 'express';
import { getTasks, createTask } from './controller/task-controller';

const app = express();
app.use(express.json());

app.get('/tasks', getTasks);

app.post('/tasks', createTask);

const porta = 3000;

app.listen(porta, () => {
  console.log(`App esta rodando na porta ${porta}`)
});