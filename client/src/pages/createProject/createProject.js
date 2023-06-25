import { useState } from "react";
import { useNavigate } from "react-router-dom";
import constants from "../../globalVars";
import StepsList from "./stepsList";

const CreateProject = () => {
    const [title, setTitle] = useState("");
    const [steps, setSteps] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(constants.BACKADR + "/project/create", {
            method: 'POST',
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({title})
        }).then(res => { 
            if (res.ok) {
                return res.json();
            }
        }).then((data) => {
            navigate("/projects", {replace: true});
        }).catch((error) => {
            console.log(error.name);
        });
    }

    const handleCancel = () => {
        navigate("/projects", {replace: true});
    }

    const handleChanges = (data) => {
        if (data.status === "add") {
            setSteps((prevState) => [...prevState, data.data]);
        }
        if (data.status === "del") {
            setSteps((prevState) => [...prevState.slice(0, data.data.i), ...prevState.slice(data.data.i + 1)])
        }
        // console.log(data);
        // console.log(steps);
    }

    return (
        <div>
            <div>
                <input 
                type="text"
                value={ title }
                onChange={ (e) => { setTitle(e.target.value) }}
                required
                />
                <StepsList steps={ steps } onChange={ handleChanges }/>
                <button onClick={ handleSubmit }>Создать</button>
                <button onClick={ handleCancel}>Отмена</button>
            </div>
        </div>
    );
}

export default CreateProject;