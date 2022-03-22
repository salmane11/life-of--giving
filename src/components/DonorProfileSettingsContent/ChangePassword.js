import styles from "./ChangePassword.module.css";
import Button from "../ui/Button";
function ChangePassword() {
    return (
        //here is the navigation when ChangePassword is active
        <div className={styles.changePassword}>
            <h3>Reset your password </h3>
            <form className={styles.form} >
                <label>
                    New password
                </label>
                <input maxLength={30} className={styles.settingsInput} type="password" name="full-name" placeholder='New password' />

                <label>
                    Confirm new password
                </label>
                <input className={styles.settingsInput} type="password" name="email-address" placeholder='Confirm new password' />

                <label>
                    Current password
                </label>
                <input className={styles.settingsInput} type="password" name="email-address" placeholder='Your current password' />

            </form>
            <span className={styles.actionForm}>
                <button className={styles.saveButton}type="submit">Update password</button>
                <Button className={styles.cancelButton}>Cancel</Button>

                </span>
        </div>




    );
}
export default ChangePassword;