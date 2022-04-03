import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import styles from "./DonorSignUp.module.css";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { host, useHttpImages } from "../../store/requests";

function OrganizationSignUp() {
  const navigate = useNavigate();

  const [organizationName, setOrganizationName] = useState("");
  const [organizationLogoViewer, setOrganizationLogoViewer] = useState("");
  const [organizationLogo, setOrganizationLogo] = useState(null);
  const [organizationFile, setOrganizationFile] = useState(null);
  const [organizationDescription, setOrganizationDescription] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [formError, setFormError] = useState("");

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

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {
      setOrganizationLogoViewer(reader.result);
    };
  };

  const organizationFileHandler = (event) => {
    setOrganizationFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };
  const organizationDescriptionHandler = (event) => {
    setOrganizationDescription(event.target.value);
  };

  //use an existing customized hook to post informations to database
  const { isLoading, error, sendRequest: signup } = useHttpImages();

  const submitHandler = (event) => {
    //to prevent page refresh on every submit
    event.preventDefault();

    if (password !== confirmedPassword) {
      setFormError("* password and confirmed password are different");
      return;
    }

    console.log({
      organizationFile,
      organizationLogo,
    });

    const data = new FormData();
    data.append("name", organizationName);
    data.append("email", email);
    data.append("description", organizationDescription);
    data.append("image", organizationLogo);
    data.append("verificationFile", organizationFile);
    data.append("password", password);

    signup(
      {
        url: host + "/signup/organisations",
        method: "post",
        body: data,
      },
      (data) => {
        console.log(data);
        navigate("/sign-in");
      }
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
          {organizationLogoViewer && (
            <img src={organizationLogoViewer} alt="organization" />
          )}
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
          {organizationFile && <p>{organizationFile.name}</p>}
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
        {error && <p className={styles.error}>{error}</p>}
        {formError && <p className={styles.error}>{formError}</p>}
      </form>
      <Link className={styles.link} to="/sign-in">
        sign in
      </Link>
    </div>
  );
}
export default OrganizationSignUp;
