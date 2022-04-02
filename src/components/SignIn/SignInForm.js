import Button from "../ui/Button";
import styles from "./SignInForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import { useContext, useState } from "react";
import userContext from "../../store/userContext";
import useHttp, { host } from "../../store/requests";

function SignInForm() {
  const userctx = useContext(userContext);

  //use the existing custom hook for http requests
  const { isLoading, error, sendRequest: signin } = useHttp();
  const navigate = useNavigate();
  const returnedDataHandler = (contextData) => {
    console.log(contextData);
    if (!error) {
      userctx.login(
        contextData.id,
        contextData.email,
        contextData.role,
        contextData.token
      );
      if (contextData.role === "ADMIN") {
        navigate("/administrator-dashboard");
      }else if(contextData.role==="DONOR"){
        navigate("/projects");
      }else if(contextData.role==="ORGANISATION"){
        navigate("/association-dashboard");
      }
    }
  };

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

    /**signin is the function that works on sending http requests
     *  using a url and a method ,headers and a body if the method needs it
     **/
    signin(
      {
        url: host + "/signin",
        method: "post",
        headers: { "Content-Type": "Application/json" },
        body: {
          email,
          password,
        },
      },
      returnedDataHandler
    );
    //change email and password's value to null (initial value)
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
        {isLoading && <p>Is Loading ...</p>}
        {error && <p>{error}</p>}
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
