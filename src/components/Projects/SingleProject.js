import styles from './SingleProject.module.css';
import project1 from '../../../src/assets/2.jpg';
import ProgressBar from "@ramonak/react-progress-bar";

const SingleProject = ( {name, src, progression, target} ) => {
    return (
        <>
            <div className={styles.projectContainer}>
                <img  className={styles.projectImage} src={src} alt="project1"/>
                <figcaption id={styles.projectName}>{name}</figcaption>
                <div className={styles.ProgressionSection}>
                    <ProgressBar 
                        completed={progression} 
                        bgColor={'#ffc900'}
                        baseBgColor = {'#fff89a'}
                        width = {350}
                        className= {styles.wrapper}
                    />
                    <p className={styles.target}>{target}</p>
                </div>
            </div>
        </>
    )
}
export default SingleProject;