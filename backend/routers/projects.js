const projectsAPI = require('express').Router();
const controllerProjects = require('../controllers/projects')

projectsAPI.get('/', controllerProjects.getProjects)
projectsAPI.post('/', controllerProjects.createProject)
projectsAPI.put('/:id', controllerProjects.updateProject)
projectsAPI.delete('/:id', controllerProjects.deleteProject)
projectsAPI.post('/:projectId/task', controllerProjects.createTask)
projectsAPI.put('/:projectId/task/:taskId', controllerProjects.updateTask)
projectsAPI.delete('/:projectId/task/:taskId', controllerProjects.updateTask)
projectsAPI.post('/:projectId/task/:taskId/completed', controllerProjects.markCompleteTask)

module.exports = projectsAPI;