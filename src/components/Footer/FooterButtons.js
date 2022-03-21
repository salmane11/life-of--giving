import Button from "../ui/Button";
import styles from './FooterButtons.module.css';

function FooterButtons() {
  return (
    <div className={styles.buttons}>
      <Button className={styles.button}>more about us</Button>
      <Button className={styles.button}>contact us</Button>
      <Button className={styles.button}>common questions</Button>
    </div>
  );
}
export default FooterButtons;
