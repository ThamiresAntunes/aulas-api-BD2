import express from 'express';
import Task from './model/task.js'

const app = express();
app.use(express.json());

app.get('/tasks', async (req, res) => {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
});

app.post('/tasks', async (req, res) => {
    try{
        const task = req.body;
        const newTask = await Task.create(task);
        res.status(201).json(newTask);
    }
    catch(err){
        console.log(err);
        res.status(400).json("Erro ao criar tarefa");
    }
    
})

const porta = 3000;

app.listen(porta, () => {
  console.log(`App esta rodando na porta ${porta}`)
});