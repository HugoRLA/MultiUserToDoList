import React, {useRef} from "react"
import classes from './AddProject.module.css'

const AddProject = (props) => {

    const nameRef = useRef('');

    function submitHandler(event) {
        event.preventDefault();

        if(nameRef.current.value != ""){
            const project = {
                name: nameRef.current.value,
            };

            props.onAddProject(project);
        }
    }

    return (
        
        <form  className={classes.addProject} onSubmit={submitHandler}>
            <div >
                <label htmlFor='title'>Name</label>
                <input type='text' id='title' ref={nameRef} />
            </div>
            <button>Add Project</button>
        </form>
    );


}

export default AddProject