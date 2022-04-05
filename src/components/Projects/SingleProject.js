import styles from './SingleProject.module.css';
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from 'react-router-dom';

// the component of a single project description in 
const SingleProject = ( {projectId,name, src, progression, target} ) => {
    const navigate=useNavigate();
    return (
        <>
            <div onClick={()=>{navigate(`/project-description/${projectId}`)}} className={styles.projectContainer}>
                <img  className={styles.projectImage} src={src} alt="project1"/>
                <figcaption id={styles.projectName}>{name}</figcaption>
                <div className={styles.ProgressionSection}>
                    <ProgressBar 
                        completed={progression} 
                        bgColor={'#ffc900'}
                        baseBgColor = {'#fff89a'}
                        width = {'350px'}
                        height = {'auto'}
                        className= {styles.wrapper}
                    />
                    <p className={styles.target}>{target}</p>
                </div>
            </div>
        </>
    )
}
export default SingleProject;