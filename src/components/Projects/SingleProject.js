import styles from './SingleProject.module.css';
import project1 from '../../../src/assets/2.jpg';
import ProgressBar from "@ramonak/react-progress-bar";

function SingleProject() {
    return (
        <>
            <div className={styles.projectContainer}>
                <img  className={styles.projectImage} src={project1} alt="project1"/>
                <figcaption id={styles.projectName}>Mosque Construction</figcaption>
                <div className={styles.ProgressionSection}>
                    <ProgressBar 
                        completed={70} 
                        bgColor={'#ffc900'}
                        baseBgColor = {'#fff89a'}
                        margin = {10}
                        width = {350}
                    />
                    <p className={styles.target} >500$</p>
                </div>
            </div>
        </>
    )
}
export default SingleProject;