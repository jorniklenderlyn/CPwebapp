import { Link } from "react-router-dom";
import useFetchGet from "../../hooks/useFetchGet";
import constants from "../../globalVars";
import ProjectsList from "./projectsList";

const ProjectsPage = () => {
    const {data: projects, isPending, error, doReload} = useFetchGet(constants.BACKADR + "/project");
    
    return (
        <div>
            <Link to="/projects/create">Новый проект</Link>
            { projects && <ProjectsList projects={ projects } /> }
        </div>
    );
}

export default ProjectsPage;