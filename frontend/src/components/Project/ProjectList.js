
import React from 'react';
import Project from './Project';
import classes from './ProjectList.module.css';

const ProjectList = (props) => {
  return (
    <ul className={classes['projects-list']}>
      {props.projects.map( (project) => (
          <Project
            key = {project.id}
            name = {project.name}
            tasks = {project.tasks}
          />
      ))}
    </ul>
  );
};

export default ProjectList;
