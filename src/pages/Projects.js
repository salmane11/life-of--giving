import ProjectsListed from "../components/Projects/ProjectsListed"
import ProjectsSlogan from "../components/Projects/ProjectsSlogan"

function Projects() {
    return (
            <div  style={{overflowX:'hidden'}}> 
                <ProjectsSlogan />
                <ProjectsListed/>
            </div>
    )
}

export default Projects;