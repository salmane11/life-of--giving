import Button from "../ui/Button";
import styles from "./NewAdminForm.module.css";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useContext, useState } from "react";
import { host, useHttpImages } from "../../store/requests";
import userContext from "../../store/userContext";

function NewAdminForm() {
  const userctx = useContext(userContext);

  const [administratorName, setAdministratorName] = useState("");
  const [administratorImage, setAdministratorImage] = useState("");
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
    // const reader = new FileReader();
    // reader.readAsDataURL(event.target.files[0]);
    // reader.onloadend = () => {
    //   setAdministratorImage(reader.result);
    // };

    setAdministratorImage(event.target.files[0]);
  };

  const { isLoading, error, sendRequest: addAdministrator } = useHttpImages();

  const submitHandler = (event) => {
    //to prevent page refresh on every submit
    event.preventDefault();

    const data = new FormData();
    data.append("name", administratorName);
    data.append("email", email);
    data.append("image", administratorImage);
    data.append("password", password);

    //TODO POST THESE DATA INTO THE BACKEND
    console.log(data.get("image"));

    addAdministrator(
      {
        url: host + "/admins",
        method: "post",
        headers: {
          Authorization: userctx.userToken,
        },
        body: data,
      },
      () => {}
    );
    console.log(isLoading, error);

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
        <input
          type="text"
          placeholder="Mohammed Lasfar"
          onChange={administratorNameHandler}
          value={administratorName}
        />
      </div>
      <div className={styles.inputs}>
        <label className={styles.labels}>Email</label>
        <input
          type="email"
          placeholder="xyz@gmail.com"
          onChange={emailHandler}
          value={email}
        />
      </div>
      <div className={styles.inputs}>
        <label className={styles.labels}>Admin Image</label>
        <label htmlFor="administratorimage" className={styles.filelabel}>
          upload the administrator image
          <UploadFileIcon />
        </label>
        <input
          id="administratorimage"
          type="file"
          multiple
          accept="image/*"
          onChange={administratorImageHandler}
        />
      </div>
      <div className={styles.inputs}>
        <label className={styles.labels}>Password</label>
        <input
          type="password"
          placeholder="*********"
          onChange={passwordHandler}
          value={password}
        />
      </div>
      <div className={styles.inputs}>
        <label className={styles.labels}> Confirm Password</label>
        <input
          type="password"
          placeholder="*********"
          onChange={confirmedPasswordHandler}
          value={confirmedPassword}
        />
      </div>
      <div className={styles.buttons}>
        <Button type="submit">Create new Admin</Button>
        <Button type="reset">Cancel</Button>
      </div>
    </form>
  );
}
export default NewAdminForm;
