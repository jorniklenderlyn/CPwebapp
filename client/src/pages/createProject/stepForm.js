import { useState } from "react";

const StepForm = ({onChange, onCancel}) => {
    const [stepName, setStepName] = useState("");
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [square, setSquare] = useState(0);
    const [num, setNum] = useState(0);
    const [typeInst, setTypeInst] = useState(0);
    const [time, setTime] = useState(0);
    const [agreement, setAgreement] = useState(0);
    const [exp, setExp] = useState(0);
    const [taskNum, setTaskNum] = useState("");

    return (
        <div>
            <form>
                <label htmlFor="stepName">Название этапа</label>
                <input 
                type="text"
                value={ stepName }
                onChange={ (e) => {setStepName(e.target.value)} }
                id="stepNmae"
                required
                />
                <br/>
                <label htmlFor="name1">Генпроектировщик</label>
                <input 
                type="text"
                value={ name1 }
                onChange={ (e) => {setName1(e.target.value)} }
                id="name1"
                required
                />
                <br/>
                <label htmlFor="name2">Генподрядчик</label>
                <input 
                type="text"
                value={ name2 }
                onChange={ (e) => {setName2(e.target.value)} }
                id="name2"
                required
                />
                <br/>
                <label htmlFor="square">Площадь</label>
                <input 
                type="text"
                value={ square }
                onChange={ (e) => {setSquare(e.target.value)} }
                id="square"
                required
                />
                <br/>
                <label htmlFor="num">Кол-во рабочих</label>
                <input 
                type="text"
                value={ num }
                onChange={ (e) => {setNum(e.target.value)} }
                id="num"
                required
                />
                <br/>
                <label htmlFor="typeInst">Тип учреждения</label>
                <input 
                type="text"
                value={ typeInst }
                onChange={ (e) => {setTypeInst(e.target.value)} }
                id="typeInst"
                required
                />
                <br/>
                <label htmlFor="time">Время</label>
                <input 
                type="text"
                value={ time }
                onChange={ (e) => {setTime(e.target.value)} }
                id="time"
                required
                /><br/>
                <label htmlFor="taskNum">Номер задачи</label>
                <input 
                type="text"
                value={ taskNum }
                onChange={ (e) => {setTaskNum(e.target.value)} }
                id="tuskNum"
                required
                /><br/>
                {/* <label for=""></label>
                <input 
                type="text"
                value={ agreement }
                onChange={ (e) => {setAgreement(e.target.value)} }
                required
                />
                <label for=""></label>
                <input 
                type="text"
                value={ exp }
                onChange={ (e) => {setExp(e.target.value)} }
                required
                /> */}
                <button onClick={ () => onChange({"status": "add", "data": {stepName, name1, name2, square, num, typeInst, time, agreement, exp, taskNum}}) }>Добавить</button>
                <button onClick={ onCancel }>Отмена</button>
            </form>
        </div>
    );
}

export default StepForm;