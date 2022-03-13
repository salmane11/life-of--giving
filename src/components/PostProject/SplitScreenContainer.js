import styles from './SplitScreenContainer.module.css';
const SplitScreenContainer= () =>{
    return(
        <div className={styles.container}>
            <div className={styles.split} id={styles.left}>
                left
            </div>
            <div className={styles.split} id={styles.right}>
                right
                
            </div>
        </div>
    )
}
export default SplitScreenContainer;