import styles from './ProjectContent.module.css'
// import image1 from './../../assets/2.jpg'
import ProgressBar from '@ramonak/react-progress-bar'
import Button from '../ui/Button'
import ProjectCarousel from './ProjectCarousel'
import { useNavigate } from 'react-router-dom'

// the section of slider and the metadata of the project
// including the due date, the target and the donate button
const ProjectContent = ({projectInformations}) => {
    const navigate=useNavigate();
    return (
        <>
            <h1 id={styles.projectTitle}>{projectInformations.title}</h1>
            <div className={styles.imageContainer}>
                  {/* <img src={image1} alt='project-picture'/> */}
                    <ProjectCarousel />
                <div className={styles.description}>
                    <h2 className={styles.dueDate}>Due date: {projectInformations.dateLimit?projectInformations.dateLimit:"some day"}</h2>
                    <label> {projectInformations.currentBalance} raised of {projectInformations.target} target </label>
                    <ProgressBar 
                            completed={((projectInformations.currentBalance/projectInformations.target)*100).toPrecision(4)} 
                            bgColor={'#ffc900'}
                            baseBgColor = {'#fff89a'}
                            width = {450}
                            height ={40}
                            className= {styles.wrapper}
                        />
                    <Button onClick={()=>{navigate("/donation")}} className={styles.donateBtn}>Donate Now</Button>
                </div>
            </div>
        </>
    )
}

export default ProjectContent;