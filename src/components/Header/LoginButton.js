import styles from "./LoginButton.module.css";
import {Link} from 'react-router-dom';
function LoginButton() {
  return (
    <div className={styles.loginbutton}>
      <Link className={styles.loginlink} to="/sign-in">LogIn</Link>
    </div>
  );
}
export default LoginButton;
