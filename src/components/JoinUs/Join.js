import Button from "../ui/Button";
import styles from './Join.module.css';

function Join(props){
    return(
        <div className={styles.join}>
            <h2>{props.title}</h2>
            <div className={styles.joincontainer}>
                <img src={props.src} alt={props.title}/>
                <p>{props.description}</p>
                <Button>Sign up</Button>
            </div>
        </div>
    )
}
export default Join;