/*import User from "./model/user.js";
import Task from "./model/task.js";

async function salvarUser() {
    const user = await User.create({
        firstName: "Jose",
        lastName: "Silva"
    });
    console.log(user.toJSON());
    console.log('User saved successfully!');
}

salvarUser();


async function salvarTask() {
    const task = await Task.create({
        titulo: "task 1",
        descricao: "task de teste para o banco",
        tipo: "Pessoal",

    });
    console.log(task.toJSON());
    console.log('task saved successfully!');
}

salvarTask();
*/

import express from 'express';
import Task from './model/task.js'
const app = express();
app.use(express.json());

app.get('/tasks', async (req, res) => {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
});

const porta = 3000;

app.listen(porta, () => {
  console.log(`App esta rodando na porta ${porta}`)
});