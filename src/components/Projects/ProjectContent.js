import styles from './ProjectContent.module.css'
// import image1 from './../../assets/2.jpg'
import ProgressBar from '@ramonak/react-progress-bar'
import Button from '../ui/Button'
import ProjectCarousel from './ProjectCarousel'

const ProjectContent = () => {
    return (
        <>
            <h1 id={styles.projectTitle}>Winter is coming</h1>
            <div className={styles.imageContainer}>
                  {/* <img src={image1} alt='project-picture'/> */}
                <div id={styles.carousel}>
                    <ProjectCarousel />
                </div>
                <div className={styles.description}>
                    <h2 className={styles.dueDate}>Due date: 15 May 2022</h2>
                    <label> 1000$ raised of 5000$ target </label>
                    <ProgressBar 
                            completed={20} 
                            bgColor={'#ffc900'}
                            baseBgColor = {'#fff89a'}
                            width = {450}
                            height ={40}
                            className= {styles.wrapper}
                        />
                    <Button className={styles.donateBtn}>Donate Now</Button>
                </div>
            </div>
        </>
    )
}

export default ProjectContent;