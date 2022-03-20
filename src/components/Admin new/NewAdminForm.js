import Button from "../ui/Button";
import styles from "./NewAdminForm.module.css";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useState } from "react";

function NewAdminForm() {
  const [administratorName, setAdministratorName] = useState("");
  const [administratorImage, setAdministratorImage] = useState(null);
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

  const administratorNameHandler = (event) => {
    setAdministratorName(event.target.value);
  };

  const administratorImageHandler = (event) => {
    setAdministratorImage(event.target.files[0]);
  };

  const submitHandler = (event) => {
    //to prevent page refresh on every submit
    event.preventDefault();

    //TODO POST THESE DATA INTO THE BACKEND

    console.log(administratorName, administratorImage, email, password, confirmedPassword);
    setAdministratorName("");
    setAdministratorImage(null);
    setEmail("");
    setPassword("");
    setConfirmedPassword("");
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.inputs}>
        <label className={styles.labels}>Full Name</label>
        <input type="text" placeholder="Mohammed Lasfar" onChange={administratorNameHandler}/>
      </div>
      <div className={styles.inputs}>
        <label className={styles.labels}>Email</label>
        <input type="email" placeholder="xyz@gmail.com" onChange={emailHandler}/>
      </div>
      <div className={styles.inputs}>
        <label className={styles.labels}>Admin Image</label>
        <label htmlFor="administratorimage" className={styles.filelabel}>
          upload the administrator image
          <UploadFileIcon />
        </label>
        <input id="administratorimage" type="file" onChange={administratorImageHandler}/>
      </div>
      <div className={styles.inputs}>
        <label className={styles.labels}>Password</label>
        <input type="password" placeholder="*********" onChange={passwordHandler}/>
      </div>
      <div className={styles.inputs}>
        <label className={styles.labels}> Confirm Password</label>
        <input type="password" placeholder="*********" onChange={confirmedPasswordHandler}/>
      </div>
      <div className={styles.buttons}>
        <Button type="submit">Create new Admin</Button>
        <Button type="reset">Cancel</Button>
      </div>
    </form>
  );
}
export default NewAdminForm;
