import styles from './Sponsor.module.css';

function Sponsor({ name, Icon }) {
    /** we use distructuring on props object 
     * to extract the name and the Icon of our sponsors */
  return (
    <div className={styles.sponsor}>
      <h4>{name}</h4>
      <Icon />
    </div>
  );
}
export default Sponsor;