const projectData = require('../data/projectsMock')

const errorProjectNotExists = {"error": "Project does not exists"}

const errorTasktNotExists = {"error": "Task does not exists"}

exports.getProjects = function (req, res) {
    res.status(200).json({"projects": projectData})
};

exports.createProject = function (req, res) {
    const projectId = Date.now()
    const {
        name,
    } = req.body;

    projectData[projectId] = {
        "name" : name,
        "tasks": {}
    }

    res.status(200).json({ "id": projectId })

};

exports.updateProject = function (req, res) {
    const {
        id,
    } = req.params;
    const {
        name,
    } = req.body;

    if(projectData[id] != undefined){
        projectData[id] = { ...projectData[id], name }
        res.status(200).json({
            "id": projectData[id].id,
            "name": projectData[id].name
        })
    }else{
        res.status(400).json(errorProjectNotExists)
    }
    
};

exports.deleteProject = function (req, res) {
    const {
        id,
    } = req.params;
    if(projectData[id] != undefined){
        delete projectData[id]
        res.status(200).json({"id": id})
    }else{
        res.status(400).json(errorProjectNotExists)
    }
};

exports.createTask = function (req, res) {
    const {
        projectId
    } = req.params;
    if(projectData[projectId] != undefined){
        const {
            name,
            desc
        } = req.body;

        const taskId = Date.now()
        projectData[projectId].tasks[taskId] = {
            "name" : name,
            "desc" : desc,
            "create_date": taskId,
            "finished_date": null
        }
        res.status(200).json({"id": taskId})

    }else{
        res.status(400).json(errorProjectNotExists)
    }
};

exports.updateTask = function (req, res) {
    const {
        projectId,
        taskId
    } = req.params;
    if(projectData[req.params.taskId] != undefined){
        const task = projectData[projectId].tasks[taskId]
        if(task != undefined && task.finished_date == null){
            const {
                name,
                desc
            } = req.body;
            projectData[projectId].tasks[taskId] = {...task, name, desc}
            res.status(200).json(projectData[projectId].tasks[taskId])
        }else{
            res.status(400).json(errorTasktNotExists)
        }

    }else{
        res.status(400).json(errorProjectNotExists)
    }
};

exports.deleteTask = function (req, res) {
    const {
        projectId,
        taskId
    } = req.params;
    if(projectData[projectId] != undefined){
        const task = projectData[projectId].tasks[taskId]
        if(task != undefined && task.finished_date == null){

            delete projectData[projectId].tasks[taskId]
            res.status(200).json({"id": taskId})
            
        }else{
            res.status(400).json(errorTasktNotExists)
        }

    }else{
        res.status(400).json(errorProjectNotExists)
    }
};

exports.markCompleteTask = function (req, res) {
    const {
        projectId,
        taskId
    } = req.params;
    if(projectData[projectId] != undefined){
        const task = projectData[projectId].tasks[taskId]
        if(task != undefined && task.finished_date == null){
            const finishedDate = Date.now()
            projectData[projectId].tasks[taskId] = {...task, "finished_date" : finishedDate}
            res.status(200).json({"id": taskId, "finished_date" : finishedDate})
            
        }else{
            res.status(400).json(errorTasktNotExists)
        }

    }else{
        res.status(400).json(errorProjectNotExists)
    }
};