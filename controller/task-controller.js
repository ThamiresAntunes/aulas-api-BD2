import Task from '../model/task.js';

export async function getTasks(req, res) {
    const tasks = await Task.findAll();
    return res.status(200).json(tasks);
}

export async function findTask(req, res) {
    const id = req.params.id;
    const task = await Task.findByPk(id);

    if(!task){
        return res.status(404).json("Tarefa não encontrada");
    }
    return res.status(200).json(task);

}

export async function createTask(req, res){
    try{
        const task = req.body;
        const newTask = await Task.create(task);
        res.status(201).json(newTask);
    }
    catch(err){
        console.log(err);
        return res.status(400).json("Erro ao criar tarefa");
    }
}

export async function deleteTask(req,res){
    console.log("entrei aqui")
    const id = req.params.id;
    const task = await Task.findByPk(id);
    if(!task){
        return res.status(404).json("Tarefa não encontrada");
    }
    await task.destroy();
    res.status(200).json(task);
}