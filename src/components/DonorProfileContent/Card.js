import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MilitaryTechSharpIcon from '@mui/icons-material/MilitaryTechSharp';
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
import Button from "../ui/Button";
import styles from "./Card.module.css";
import { NavLink } from "react-router-dom";



function Card(props) {
    return (
        <>
            <div className={styles.card} >
                <img src={props.donor_image} alt={props.donor_name} />
                <div className={styles.description}>
                    <h1>{props.donor_name}</h1>
                    <p className={styles.mediumText}>{props.donor_location}</p>
                    <span className={styles.donor_score}>
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
                    <div className={styles.socialNetwork}>
                        <span>
                            < div className={styles.socialIcon}> <FacebookIcon /></div>
                            <p className={styles.mediumText}>{props.donor_fb}</p>
                        </span>
                        <span>
                            < div className={styles.socialIcon}><InstagramIcon /></div>
                            <p className={styles.mediumText}>{props.donor_insta}</p>
                        </span>
                        <span>
                            < div className={styles.socialIcon}><YouTubeIcon /></div>
                            <p className={styles.mediumText}>{props.donor_ytb}</p>
                        </span>
                    </div>
                    <NavLink to="/donor-profile/settings">
                        <Button className={styles.button}> <div className={styles.buttonText}>Modify</div></Button>
                    </NavLink>

                </div>

            </div>

        </>
    );

}
export default Card;
