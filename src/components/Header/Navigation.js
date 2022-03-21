import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          {/** the active className help styling a link (only for navlink) when it's active*/}
          <NavLink
            className={({ isActive }) =>
              !isActive ? styles.link : styles.activelink
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              !isActive ? styles.link : styles.activelink
            }
            to="/about-us"
          >
            AboutUs
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              !isActive ? styles.link : styles.activelink
            }
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              !isActive ? styles.link : styles.activelink
            }
            to="/associations"
          >
            Associations
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              !isActive ? styles.link : styles.activelink
            }
            to="/donors"
          >
            Donors
          </NavLink>
        </li>
        {/*!!!!!!!!!!!!!add a link to the administrator page!!!!!!!!!!!*/}
      </ul>
    </nav>
  );
}
export default Navigation;
