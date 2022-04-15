const projectsAPI = require('express').Router();
var projectData = require('../data/projectsMock')

projectsAPI.get('/', function(req, res) {
  res.status(200).json(projectData)
});

module.exports = projectsAPI;