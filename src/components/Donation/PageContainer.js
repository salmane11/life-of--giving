import ProjectCarousel from "../Projects/ProjectCarousel"
import { TitleSection } from "../Projects/ProjectOrganization"
import styles from './PageContainer.module.css'
import EntityConverter from "./EntityConverter"
import StripeContainer from '../../Stripe/StripeContainer'

const PageContainer = () => {
    return (
        <>
            <div className={styles.outsideContainer}>
                <div className={styles.insideContainer}>
                    <ProjectCarousel/>
                    <div id={styles.descriptionSection}>
                        <p>This project will help 429 families, 1023 individuals. 
                            You are helping CAS organization to achieve its annual goal. 
                            Please fill out the form to complete your donation.</p>
                        <EntityConverter entity={'family'} entityPrice={20} target={900}/>
                    </div>
                </div>
                <TitleSection title={'Payment Information'} marginLeftTitle={'52%'}/>
                <StripeContainer />
            </div>
        </>
    )
}
export default PageContainer;