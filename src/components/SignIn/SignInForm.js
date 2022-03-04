import Button from "../ui/Button";
import styles from "./SignInForm.module.css";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import { useContext, useState } from "react";
import userContext from "../../store/userContext";

function SignInForm() {

  const userctx=useContext(userContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (event) => {
    // event.target.value give the access to every change in the input
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    //to prevent page refresh on every submit
    event.preventDefault();

    //TODO
    //email and password detection (admin, donor, organization)
    if(email==="admin@gmail.com" && password==="123456789"){
      userctx.login("admin","administrator");
    }else if(email==="donor@gmail.com" && password==="123456789"){
      userctx.login("donor","donor");
    }else if(email==="organization@gmail.com" && password==="123456789"){
      userctx.login("organization","organization");
    }

    console.log(userctx.loggedIn);
    console.log(userctx.userRole);

    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.signincontainer}>
      <h1>Sign In</h1>
      <form onSubmit={submitHandler}>
        <div className={styles.inputs}>
          <label>Email</label>
          <input
            type="email"
            placeholder="youremail@gmail.com"
            onChange={emailHandler}
            value={email}
          />
        </div>
        <div className={styles.inputs}>
          <label>Password</label>
          <input
            type="password"
            placeholder="*************"
            onChange={passwordHandler}
            value={password}
          />
        </div>
        <Button>Login</Button>
      </form>
      <div className={styles.links}>
        <PersonIcon />
        <Link className={styles.link} to="/donor-sign-up">
          Sign up as a donor
        </Link>
      </div>
      <div className={styles.links}>
        <GroupIcon />
        <Link className={styles.link} to="/organization-sign-up">
          Sign up as an organization
        </Link>
      </div>
    </div>
  );
}
export default SignInForm;
