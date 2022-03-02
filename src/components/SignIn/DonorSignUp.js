import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import styles from "./DonorSignUp.module.css";
import UploadFileIcon from "@mui/icons-material/UploadFile";

function DonorSignUp() {
  const [donorName, setDonorName] = useState("");
  const [donorImage, setDonorImage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const emailHandler = (event) => {
    // event.target.value give the access to every change in the input
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmedPasswordHandler = (event) => {
    setConfirmedPassword(event.target.value);
  };

  const donorNameHandler = (event) => {
    setDonorName(event.target.value);
  };

  const donorImageHandler = (event) => {
    setDonorImage(event.target.files[0]);
  };

  const submitHandler = (event) => {
    //to prevent page refresh on every submit
    event.preventDefault();

    //TODO POST THESE DATA INTO THE BACKEND

    console.log(donorName, donorImage, email, password, confirmedPassword);
    setDonorName("");
    setDonorImage(null);
    setEmail("");
    setPassword("");
    setConfirmedPassword("");
  };

  return (
    <div className={styles.signupcontainer}>
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler}>
        <div className={styles.inputs}>
          <label>Donor Name</label>
          <input
            type="text"
            placeholder="SJNHCALT"
            onChange={donorNameHandler}
            value={donorName}
          />
        </div>
        <div className={styles.inputs}>
          <label>Donor Image</label>
          {/**to style the input file type you need to hide the input tag and use the htmlFor
           * to rely the label with his input and style the label as you want */}
          <label htmlFor="donorimage" className={styles.filelabel}>
            upload your image
            <UploadFileIcon />
          </label>
          <input
            type="file"
            id="donorimage"
            placeholder="/profile.jpg"
            onChange={donorImageHandler}
          />
        </div>
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
        <div className={styles.inputs}>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="*************"
            onChange={confirmedPasswordHandler}
            value={confirmedPassword}
          />
        </div>
        <Button>SignUp</Button>
      </form>
      <Link className={styles.link} to="/sign-in">
        sign in
      </Link>
    </div>
  );
}
export default DonorSignUp;
