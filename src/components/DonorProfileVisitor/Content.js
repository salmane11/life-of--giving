import styles from "./Content.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MilitaryTechSharpIcon from '@mui/icons-material/MilitaryTechSharp';
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';

function Content() {
    let DonatorInfo = [
        {
            donor_name: "John Wick",
            donor_fb: "/John Wick",
            donor_insta: "/John_Wick",
            donor_ytb: "/John-Wick",
            donor_image: "/images/donor2.jpg",
            donor_score: "8",
            coins: 12,
            badge: "Master Badge",
            creation_date: "12/03/2021",
            total_donation:120

        }
    ]
    const image = DonatorInfo[0].donor_image;
    const name = DonatorInfo[0].donor_name;
    const fb = DonatorInfo[0].donor_fb;
    const insta = DonatorInfo[0].donor_insta;
    const ytb = DonatorInfo[0].donor_ytb;
    const coins = DonatorInfo[0].coins;
    const badge = DonatorInfo[0].badge;
    const date = DonatorInfo[0].creation_date;
    const total = DonatorInfo[0].total_donation;



    return (

        <div className={styles.container}>
            <div className={styles.item1}>
                <img src={image} alt={name} />
                <div className={styles.imageUnderText}>

                <h1>{name}</h1>
              
                    <div className={styles.socialNetwork}> 
                        <FacebookIcon className={styles.socialIcon} />
                        <span >{fb}</span>
                    </div>
                    <div className={styles.socialNetwork}>
                        <InstagramIcon  />
                        <span >{insta}</span>
                    </div>
                    <div className={styles.socialNetwork}>
                        <YouTubeIcon  />
                        <span >{ytb}</span>
                    </div>
                    </div>

             
            </div>
            <div className={styles.item2}>
                <h3 className={styles.total}> Total of donations: {total} $</h3>
                <span className={styles.score}>
                    <MonetizationOnSharpIcon className={styles.icon} />
                    <span>{coins}</span>
                </span>
                <span className={styles.score}>
                    <MilitaryTechSharpIcon className={styles.icon} />
                    <span>{badge}</span>
                </span>
                <p className={styles.date}>Profile created since : {date}</p>

            </div>

        </div>
    );

}
export default Content;
