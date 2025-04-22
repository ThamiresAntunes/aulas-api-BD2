import Task from '../model/task.js';

export async function getTasks(req, res) {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
}

export async function findTask(req, res) {
    const id = req.params.id;
    const task = await Task.findByPk(id);

    if(!task){
        return res.status(404).json("Tarefa não encontrada");
    }
    res.status(200).json(task);

}

export async function createTask(req, res){
    try{
        const task = req.body;
        const newTask = await Task.create(task);
        res.status(201).json(newTask);
    }
    catch(err){
        console.log(err);
        res.status(400).json("Erro ao criar tarefa");
    }
    
}