import styles from './ProjectTextDescription.module.css';

//the text description of each project in its description page
const ProjectTextDescription = ({projectInformations}) => {
    return (
        <>
            <div className={styles.descriptionText}>
                <p>{projectInformations.description}</p>
            </div>
        </>
    )
}

export default ProjectTextDescription;