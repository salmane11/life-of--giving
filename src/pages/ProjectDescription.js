import ProjectContent from '../components/Projects/ProjectContent';
import ProjectTextDescription from '../components/Projects/ProjectTextDescription';
import ProjectOrganization from '../components/Projects/ProjectOrganization'
import styles from './ProjectDescription.module.css';
 
const ProjectDescription = () => {
    return (
        <>
            <div className={styles.projectsPage}>
                <ProjectContent />
                <ProjectTextDescription/>
                <ProjectOrganization/>
            </div>
        </>
    )
}

export default ProjectDescription;