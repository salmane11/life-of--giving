import { useContext } from "react";
import { NavLink } from "react-router-dom";
import userContext from "../../store/userContext";
import styles from "./Navigation.module.css";

function Navigation() {
  const userctx = useContext(userContext);

  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          {/** the active className help styling a link (only for navlink) when it's active
           * we can render links conditionnally based on the user role fetched from the user context
           */}
          {userctx.userRole === "ADMIN" ? (
            <NavLink
              className={({ isActive }) =>
                !isActive ? styles.link : styles.activelink
              }
              to="/administrator-dashboard"
            >
              Dashboard
            </NavLink>
          ) : (
            <NavLink
              className={({ isActive }) =>
                !isActive ? styles.link : styles.activelink
              }
              to="/"
            >
              Home
            </NavLink>
          )}
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
        {/**
         *  we can render profile links conditionnally based on the user role fetched from the user context
         */}
        {userctx.userRole === "DONOR" ? (
          <NavLink
            className={({ isActive }) =>
              !isActive ? styles.link : styles.activelink
            }
            to="/donor-profile"
          >
            MyProfile
          </NavLink>
        ) : userctx.userRole === "ORGANISATION" ? (
          <NavLink
            className={({ isActive }) =>
              !isActive ? styles.link : styles.activelink
            }
            to="/organization-profile"
          >
            OurProfile
          </NavLink>
        ) : null}
      </ul>
    </nav>
  );
}
export default Navigation;
