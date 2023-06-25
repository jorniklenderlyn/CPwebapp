import { useNavigate } from "react-router-dom";

const Project = ({title, pid}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/project/${pid}/dashboard`)
    }

    return (
        <div>
            <h3>{ title }</h3>
            <p>Дата начала</p>
            <button onClick={ handleClick }>Открыть</button>
        </div>
    );
}

export default Project;