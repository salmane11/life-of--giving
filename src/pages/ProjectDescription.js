import ProjectContent from '../components/Projects/ProjectContent';
import ProjectTextDescription from '../components/Projects/ProjectTextDescription';
import {ProjectOrganization} from '../components/Projects/ProjectOrganization'
import { TitleSection } from '../components/Projects/ProjectOrganization';
import styles from './ProjectDescription.module.css';
import UpdateSection from '../components/Projects/UpdateItem';
 
const ProjectDescription = () => {
    return (
        <>
            <div className={styles.projectsPage}>
                <ProjectContent />
                <ProjectTextDescription/>
                <ProjectOrganization/>
                <TitleSection title={'Updates'}/>
                <UpdateSection/>
            </div>
        </>
    )
}

export default ProjectDescription;