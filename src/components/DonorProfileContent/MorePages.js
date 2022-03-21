import Button from "../ui/Button";
import styles from "./MorePages.module.css";
import { NavLink } from "react-router-dom";




function MorePages() {
    return (
        <div className={styles.content}>
            <h1 className={styles.morepages}> More Pages</h1>
            <NavLink to="/">
                <Button className={styles.button}><p className={styles.choices}>Saved publications</p></Button>
            </NavLink>
            <NavLink to="/donor-profile/settings">

                <Button className={styles.button}><p className={styles.choices}>Account settings</p></Button>
            </NavLink>
            <NavLink to="/">

                <Button className={styles.button}><p className={styles.choices}>Get Help</p></Button>
            </NavLink>


        </div>
    );
}
export default MorePages;
