import Project from "./project";

const ProjectsList = ({projects}) => {
    console.log(projects);
    return (
        <div>
            { projects.map((p) => (
                <Project key={ p.id } title={ p.title } pid={ p.id } />
            ))}
        </div>
    );
}

export default ProjectsList;