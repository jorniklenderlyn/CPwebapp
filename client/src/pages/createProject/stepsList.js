import { useState } from "react";
import StepForm from "./stepForm";

const StepsList = ({steps, onChange}) => {
    const [isForm, setIsForm] = useState(false);

    const showForm = () => {
        setIsForm(isForm === false);
    }

    return (
        <div>
            { steps.map((step, i) => (
                <div key={ i }>
                    <div>{ step.stepName }</div>
                    <button onClick={ () => onChange({"status": "del", "data": {i}}) }>Удалить</button>
                </div>
            ))}
            { isForm && <StepForm onChange={ onChange } onCancel={ showForm }/> }
            <button onClick={ showForm }>Добавить этап</button>
        </div>
    );
}

export default StepsList;