import { Nav, NavItem } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../ui/Button'


function Navigation() {

    return (

        <div className={styles.navigation}>
            <Nav className={styles.nav} justify variant="tabs"  >
                <NavItem>
                    <NavLink to="/donor-profile/settings" className={({ isActive }) =>
                        !isActive ? styles.link : styles.activelink
                    }> <Button className={styles.button}>Edit Profile </Button> </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/donor-profile/change-password" className={({ isActive }) =>
                        !isActive ? styles.link : styles.activelink
                    }> <Button className={styles.button}>Change Password</Button> </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/donor-profile/donation-history" className={({ isActive }) =>
                        !isActive ? styles.link : styles.activelink
                    }> <Button className={styles.button}>Donations History</Button></NavLink>
                </NavItem>

            </Nav>
        </div>
    );

}
export default Navigation;