import styles from "./ChangePassword.module.css";
import Button from "../ui/Button";
import { useContext, useState } from "react";
import useHttp, { donationshost } from "../../store/requests";
import userContext from "../../store/userContext";
import { Link, useNavigate } from "react-router-dom";
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

        changePassword(
            {
                url: donationshost,
                method: "post",
                headers: {
                    Authorization: userctx.userToken,
                },
                body: {
                    password,
                    newPassword,
                    confirmedPassword,
                },

            },
            () => { }
        );
        navigate("/donor-profile");

        setPassword("");
        setNewPassword("");
        setConfirmedPassword("");

    }


    return (
        //here is the navigation when ChangePassword is active
        <div className={styles.changePassword} >
            <h3>Reset your password </h3>
            <form className={styles.form} onSubmit={submitHandler} >
                <label>
                    New password
                </label>
                <input
                    maxLength={30}
                    className={styles.settingsInput}
                    type="password"
                    name="full-name"
                    placeholder='New password'
                    onChange={newPasswordHandler}
                    value={newPassword} />

                <label>
                    Confirm new password
                </label>
                <input
                    className={styles.settingsInput}
                    type="password"
                    name="email-address"
                    placeholder='Confirm new password'
                    onChange={confirmedPasswordHandler}
                    value={confirmedPassword} />

                <label>
                    Current password
                </label>
                <input
                    className={styles.settingsInput}
                    type="password" name="email-address"
                    placeholder='Your current password'
                    onChange={passwordHandler}
                    value={password} />

            </form>
            <span className={styles.actionForm}>
                <Link to="/donor-profile"> <button className={styles.saveButton} type="submit">Update password</button></Link>
                <Link to="/donor-profile"> <Button className={styles.cancelButton}>Cancel</Button></Link>

            </span>
        </div>




    );
}
export default ChangePassword;