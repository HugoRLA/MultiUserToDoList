import React from 'react';
import classes from './Project.module.css'

const Project = (props) => {

    return(
        <li className={classes.project}>
            <h2>{props.name}</h2>
        </li>
    )

}

export default Project