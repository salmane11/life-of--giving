import { TitleSection } from '../Projects/ProjectOrganization';
import AttributeSectionContainer from './AttributeSectionContainer';
import TextEditor from './TextEditor';
import styles from './SplitScreenContainer.module.css';
const SplitScreenContainer= () =>{
    return(
        <div className={styles.container}>
            <div className={styles.split} id={styles.left}>
                <TitleSection title={'Post a new project'} marginLeftTitle={50} />
                <TextEditor/>
            </div>
            <div className={styles.split} id={styles.right}>
                <AttributeSectionContainer />
            </div>
        </div>
    )
}
export default SplitScreenContainer;
