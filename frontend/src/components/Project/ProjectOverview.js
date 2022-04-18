import React, { useCallback, useEffect, useState } from "react"
import AddProject from "./AddProject";
import ProjectList from "./ProjectList";
import './ProjectOverview.module.css';

const ProjectOverview = () => {

    const [projects, setProjects] = useState([])

    const fecthProjectsHandler = useCallback(async () => {
        const response = await fetch('http://localhost:9080/projects/')
        const data = await response.json()
        let projects = []
        for (const project in data.projects) {
            projects.push({
                "id": project,
                ...data.projects[project]
            })
        }
        setProjects(projects)
    }, [])

    useEffect(() => {
        fecthProjectsHandler()
    }, [fecthProjectsHandler])

    async function addProjectHandler(project) {
        const response = await fetch('http://localhost:9080/projects/', {
            method: 'POST',
            body: JSON.stringify(project),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        fecthProjectsHandler()
    }

    return (

        <div>
            <h1>Projects</h1>
            <ProjectList
                projects={projects}
            />
            <AddProject onAddProject={addProjectHandler} />
        </div>
    )
}

export default ProjectOverview