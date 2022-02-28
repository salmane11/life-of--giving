import styles from "./Content.module.css";

function Content(props) {
  return (
    <div className={props.reverse ? `${styles.content} ${styles.reverse}` : styles.content}>
      <div className={styles.description}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
      <img src={props.src} alt={props.src} />
    </div>
  );
}
export default Content;
