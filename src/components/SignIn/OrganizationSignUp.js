import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import styles from "./DonorSignUp.module.css";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import useHttp, { host } from "../../store/requests";

function OrganizationSignUp() {
  const [organizationName, setOrganizationName] = useState("");
  const [organizationLogo, setOrganizationLogo] = useState(null);
  const [organizationFile, setOrganizationFile] = useState(null);
  const [organizationDescription, setOrganizationDescription] = useState("");
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

  const organizationNameHandler = (event) => {
    setOrganizationName(event.target.value);
  };

  const organizationLogoHandler = (event) => {
    setOrganizationLogo(event.target.files[0]);
  };

  const organizationFileHandler = (event) => {
    setOrganizationFile(event.target.files[0]);
  };
  const organizationDescriptionHandler = (event) => {
    setOrganizationDescription(event.target.value);
  };

  //use an existing customized hook to post informations to database
  const { isLoading, error, sendRequest: signup } = useHttp();

  const submitHandler = (event) => {
    //to prevent page refresh on every submit
    event.preventDefault();

    console.log({
      organizationFile,
      organizationLogo,
    });
    signup(
      {
        url: host + "/signup/organisations",
        method: "post",
        headers: { "Content-Type": "Application/json" },
        body: {
          name: organizationName,
          email,
          password,
          description: organizationDescription,
        },
      },
      (data) => {console.log(data);}
    );

    setOrganizationName("");
    setOrganizationLogo(null);
    setOrganizationFile(null);
    setOrganizationDescription("");
    setEmail("");
    setPassword("");
    setConfirmedPassword("");
  };

  return (
    <div className={styles.signupcontainer}>
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler}>
        <div className={styles.inputs}>
          <label>organization Name</label>
          <input
            type="text"
            placeholder="AL yussr "
            onChange={organizationNameHandler}
            value={organizationName}
          />
        </div>
        <div className={styles.inputs}>
          <label>organization Logo</label>
          {/**to style the input file type you need to hide the input tag (display : none) and use the htmlFor
           * to rely the label with his input and style the label as you want */}
          <label htmlFor="organizationlogo" className={styles.filelabel}>
            upload your image
            <UploadFileIcon />
          </label>
          <input
            type="file"
            id="organizationlogo"
            placeholder="/logo.jpg"
            onChange={organizationLogoHandler}
          />
        </div>
        <div className={styles.inputs}>
          <label>organization File</label>
          <label htmlFor="organizationfile" className={styles.filelabel}>
            upload your file
            <UploadFileIcon />
          </label>
          <input
            type="file"
            id="organizationfile"
            placeholder="/file.pdf"
            onChange={organizationFileHandler}
          />
        </div>
        <div className={styles.inputs}>
          <label>Description</label>
          <textarea
            type="text"
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            onChange={organizationDescriptionHandler}
            value={organizationDescription}
          />
        </div>
        <div className={styles.inputs}>
          <label>Email</label>
          <input
            type="email"
            placeholder="organizationemail@gmail.com"
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
export default OrganizationSignUp;
