const projectsAPI = require('express').Router();
const controllerProjects = require('../controllers/projects')

projectsAPI.get('/', controllerProjects.getProjects)
projectsAPI.post('/', controllerProjects.createProject)
projectsAPI.put('/:id', controllerProjects.updateProject)
projectsAPI.delete('/:id', controllerProjects.deleteProject)
projectsAPI.post('/:idProject/task', controllerProjects.createTask)
projectsAPI.put('/:idProject/task/:id_task', controllerProjects.updateTask)
projectsAPI.delete('/:idProject/task/:id_task', controllerProjects.updateTask)
projectsAPI.post('/:idProject/task/:id_task/completed', controllerProjects.updateTask)

module.exports = projectsAPI;