import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import styles from './Request.module.css';

function Request(props){
    return(
        <div className={styles.request}>
            <img src={props.src} alt={props.src}/>
            <div className={styles.informations}>
                <h2>{props.organizationName}</h2>
                <p>{props.organizationDescription}</p>
            </div>
            <Button><Link to={`/requests/${props.organizationId}`} className={styles.requestlink}>Show Details</Link></Button>
        </div>
    )
}
export default Request;