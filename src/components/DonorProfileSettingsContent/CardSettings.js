import styles from "./CardSettings.module.css";
import Button from "../ui/Button";
import MilitaryTechSharpIcon from '@mui/icons-material/MilitaryTechSharp';
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
import { NavLink } from "react-router-dom";
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
                <NavLink to='/donor-profile'><Button className={styles.button}><p className={styles.choices}>My Profile</p></Button></NavLink>
                <Button className={styles.selected_button}><p className={styles.choices}>Account settings </p></Button>
                <NavLink to='/about-us'> <Button className={styles.button}><p className={styles.choices}>Get help </p></Button></NavLink>
                </div>

            </div>


        </>



    );

}
export default CardSettings;