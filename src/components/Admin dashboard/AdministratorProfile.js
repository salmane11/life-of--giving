import { Link } from "react-router-dom";
import Button from "../ui/Button";
import styles from "./AdministratorProfile.module.css";

function AdministratorProfile() {
  return (
    <div className={styles.profile}>
      <img src="/images/donor.jpg" alt="" />
      <h1>Mohammed Lasfar</h1>
      <h3>Administrator</h3>
      <Button>
        <Link to="/dashboard" className={styles.link}>Dashboard</Link>
      </Button>
      <Button>
        <Link to="/new-administrator" className={styles.link}>add administrator</Link>
      </Button>
      <Button>
        <Link to="/requests" className={styles.link}>show requests</Link>
      </Button>
    </div>
  );
}
export default AdministratorProfile;
