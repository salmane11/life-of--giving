import { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../../store/userContext";
import Button from "../ui/Button";
import styles from "./AdministratorProfile.module.css";

function AdministratorProfile() {
  const userctx=useContext(userContext);
  return (
    <div className={styles.profile}>
      <img src="/images/donor.jpg" alt="" />
      <h1>{userctx.userName}</h1>
      <h3>Administrator</h3>
      <Button>
        <Link to="/administrator-dashboard" className={styles.mylink}>Dashboard</Link>
      </Button>
      <Button>
        <Link to="/new-administrator" className={styles.mylink}>add administrator</Link>
      </Button>
      <Button>
        <Link to="/requests" className={styles.mylink}>show requests</Link>
      </Button>
    </div>
  );
}
export default AdministratorProfile;
