import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import styles from "./DonorSignUp.module.css";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import useHttp, { host } from "../../store/requests";

function DonorSignUp() {
  const navigate = useNavigate();

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
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {
      setDonorImage(reader.result);
      console.log(reader.result);
    };
  };
  const { isLoading, error, sendRequest: signup } = useHttp();

  const submitHandler = (event) => {
    //to prevent page refresh on every submit
    event.preventDefault();

    //TODO POST THESE DATA INTO THE BACKEND

    console.log(donorImage);
    signup(
      {
        url: host + "/signup/donors",
        method: "post",
        headers: { "Content-Type": "Application/json" },
        body: {
          name: donorName,
          email,
          password,
        },
      },
      () => {}
    );

    navigate("/sign-in");

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
          {donorImage && <img src={donorImage} alt="donor"/>}
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
        {isLoading && <p>isLoading ...</p>}
        {error && <p>{error}</p>}
      </form>
      <Link className={styles.link} to="/sign-in">
        sign in
      </Link>
    </div>
  );
}
export default DonorSignUp;
