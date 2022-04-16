const projectData = require('../data/projectsMock')

exports.getProjects = function(req, res) {
    res.status(200).json(projectData)
};

exports.createProject = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

exports.updateProject = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

exports.deleteProject = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

exports.createTask = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

exports.updateTask  = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

exports.deleteTask = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

exports.markCompleteTask = function(req, res) {
    res.send('NOT IMPLEMENTED');
};