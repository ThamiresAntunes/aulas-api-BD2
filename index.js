import express from 'express';
import TaskRouter from './router/task-router.js';

const app = express();
app.use(express.json());
app.use('/tasks', TaskRouter);

const porta = 3000;

app.listen(porta, () => {
  console.log(`App esta rodando na porta ${porta}`);
});