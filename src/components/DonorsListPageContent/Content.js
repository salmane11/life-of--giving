import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import styles from "./Content.module.css";
import { useState } from "react";
import Button from "../ui/Button";
import { NavLink } from "react-router-dom";

// this component include all the content of donors list page

function Content(props) {
    // starting number of visible donors
    const [visibleDonors, setVisibleDonors] = useState(6);
    //method that set visible donors to the current amount + 6
    const handleClick = () => {
        setVisibleDonors(prevesibleDonors => prevesibleDonors + 3);
    }

    // list of visible donors split by visibleDonors state
    let listDonors = props.list.slice(0, visibleDonors).map((element) => (
        <NavLink className={styles.card} to="/donors/:profileId">

            <div key={element.donor_image}>

                <img src={element.donor_image} alt={element.name} />
                <div className={styles.score}>{element.donor_score}</div>
                <div className={styles.description}>
                    <h1>{element.donor_name}</h1>
                    <div className={styles.socialNet}>
                        <span>
                            <FacebookIcon className={styles.socialIcon} />
                            <p>{element.donor_fb}</p>
                        </span>
                        <span>
                            <InstagramIcon className={styles.socialIcon} />
                            <p>{element.donor_insta}</p>
                        </span>
                        <span>
                            <YouTubeIcon className={styles.socialIcon} />
                            <p>{element.donor_ytb}</p>
                        </span>
                    </div>
                </div>


            </div>
        </NavLink>


    ));
    return (
        <>
            <h1 className={styles.quote}>Charity brings to life again those who are spiritually dead</h1>
            <div className={styles.main_content}>
                {listDonors}
            </div>
            <Button className={styles.button} onClick={handleClick}><div className={styles.buttonText}>Load More</div></Button>
        </>
    );
}
export default Content;

