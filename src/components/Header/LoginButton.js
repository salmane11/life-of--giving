import styles from "./LoginButton.module.css";
import { Link } from "react-router-dom";
import userContext from "../../store/userContext";
import { useContext } from "react";

function LoginButton() {
  //the user context gives us the ability to spread the user informations
  //into the whole tree structure of our project
  const userctx = useContext(userContext);

  const logoutHandler = () => {
    userctx.logout();
  };

  return (
    <div className={styles.loginbutton}>
      {/**if the user is logged in loggedIn===true 
       * then we will change loginButton to logout button 
       * and loggedin variable to false after the click*/}
      <Link className={styles.loginlink} onClick={logoutHandler} to="/sign-in">
        {!userctx.loggedIn ? "LogIn" : "LogOut"}
      </Link>
    </div>
  );
}
export default LoginButton;
