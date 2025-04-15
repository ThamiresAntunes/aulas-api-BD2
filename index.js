import User from "./model/user.js";
import Task from "./model/task.js";

/*
async function salvarUser() {
    const user = await User.create({
        firstName: "Jose",
        lastName: "Silva"
    });
    console.log(user.toJSON());
    console.log('User saved successfully!');
}

salvarUser();
*/

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
