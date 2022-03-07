import ProjectCarousel from "../Projects/ProjectCarousel"
import styles from '../Projects/ProjectContent.module.css'
import ProgressBar from '@ramonak/react-progress-bar';
import Button from '../ui/Button';

const Container = () => {
    return (
        <>
            <div style={{backgroundColor:'var(--first-color)',
            display:'flex',
            minHeight:400,
            alignSelf:'center',
            marginBottom:20,
            marginLeft:20,
            marginRight:20,
            borderRadius:25
            }}>
                <div className={styles.imageContainer}>
                  {/* <img src={image1} alt='project-picture'/> */}
                    <ProjectCarousel />
                <div className={styles.description}>
                    <h2 className={styles.dueDate}>Due date: 15 May 2022</h2>
                    <label> 1000$ raised of 5000$ target </label>
                    <ProgressBar 
                            completed={40} 
                            bgColor={'#ffc900'}
                            baseBgColor = {'#fff89a'}
                            width = {450}
                            height ={40}
                            className= {styles.wrapper}
                        />
                    <Button className={styles.donateBtn}>Donate Now</Button>
                </div>
            </div>
            </div>
        </>
    )
}
export default Container;