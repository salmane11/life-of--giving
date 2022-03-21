import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import styles from './SocialNetworks.module.css';
function SocialNetworks() {
  return (
    <div  className={styles.socialnetworks}>
      <h3 className={styles.title}>Find Us On :</h3>
      <div>
        <span >
          <FacebookIcon />
          Facebook : life of giving
        </span>
        <span>
          <YouTubeIcon />
          Youtube: life of giving Channel
        </span>
        <span>
          <InstagramIcon />
          Instagram: Life_Of_Giving
        </span>
      </div>
    </div>
  );
}
export default SocialNetworks;
