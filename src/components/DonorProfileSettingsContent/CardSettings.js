import styles from "./CardSettings.module.css";
import Button from "../ui/Button";
import MilitaryTechSharpIcon from '@mui/icons-material/MilitaryTechSharp';
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
function CardSettings(props) {

    return (
        <>
            <div className={styles.card} >
                <div className={styles.wrapper}>
                    <img src={props.donor_image} alt={props.donor_name} />
                    <label htmlFor="donor-image">Edit Picture</label>
                    <input id='donor-image' type="file" className={styles.my_file} accept="image/png, image/gif, image/jpeg"></input>
                </div>
                <div className={styles.description}>
                    <h1>{props.donor_name}</h1>
                    <p className={styles.mediumText}>{props.donor_location}</p>
                    <span className={styles.score}>
                        <span>
                            < div className={styles.scoreIcon}><MonetizationOnSharpIcon /></div>
                            <p>{props.coins}</p>
                        </span>
                        <span>
                            < div className={styles.scoreIcon}><MilitaryTechSharpIcon /></div>
                            <p>{props.badge}</p>
                        </span>

                    </span>
                    <p className={styles.mediumText} >{props.donor_bio}</p>
                </div>
                <div className={styles.more_pages}>
                <Button className={styles.button}><p className={styles.choices}>Dashboard</p></Button>
                <Button className={styles.button}><p className={styles.choices}>Saved publications</p></Button>
                <Button className={styles.selected_button}><p className={styles.choices}>Account settings </p></Button>
                <Button className={styles.button}><p className={styles.choices}>Get help </p></Button>
                </div>

            </div>


        </>



    );

}
export default CardSettings;