import styles from "./ChangePassword.module.css";
import Button from "../ui/Button";
import { useContext, useState } from "react";
import useHttp, { donationshost, host } from "../../store/requests";
import userContext from "../../store/userContext";
import { Link, useNavigate } from "react-router-dom";
import { ConstructionOutlined } from "@mui/icons-material";
function ChangePassword() {
  const userctx = useContext(userContext);
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const newPasswordHandler = (event) => {
    setNewPassword(event.target.value);
  };
  const confirmedPasswordHandler = (event) => {
    setConfirmedPassword(event.target.value);
  };

  const { isLoandig, error, sendRequest: changePassword } = useHttp();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log({
        donorId: +userctx.userId,
        currentPass: password,
        newPass: newPassword,
        newPassAgain: confirmedPassword,
      })
    changePassword(
      {
        url: host + "/donors/reset-password",
        method: "post",
        headers: {
          Authorization: userctx.userToken,
        },
        body: {
          donorId: +userctx.userId,
          currentPass: password,
          newPass: newPassword,
          newPassAgain: confirmedPassword,
        },
      },
      () => {}
    );

    setPassword("");
    setNewPassword("");
    setConfirmedPassword("");
  };

  return (
    //here is the navigation when ChangePassword is active
    <div className={styles.changePassword}>
      <h3>Reset your password </h3>
      <form className={styles.form} onSubmit={submitHandler}>
        <label>New password</label>
        <input
          maxLength={30}
          className={styles.settingsInput}
          type="password"
          name="full-name"
          placeholder="New password"
          onChange={newPasswordHandler}
          value={newPassword}
        />

        <label>Confirm new password</label>
        <input
          className={styles.settingsInput}
          type="password"
          name="email-address"
          placeholder="Confirm new password"
          onChange={confirmedPasswordHandler}
          value={confirmedPassword}
        />

        <label>Current password</label>
        <input
          className={styles.settingsInput}
          type="password"
          name="email-address"
          placeholder="Your current password"
          onChange={passwordHandler}
          value={password}
        />

        <span className={styles.actionForm}>
          <button className={styles.saveButton} type="submit">
            Update password
          </button>
          <Button className={styles.cancelButton}>Cancel</Button>
        </span>
      </form>
    </div>
  );
}
export default ChangePassword;
