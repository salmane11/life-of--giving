import Card from "../ui/Card";
import styles from './Association.module.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

function Association(props){
    return(
        <Card className={styles.association}>
            <img src={props.src} alt={props.src}/>
            <div className={styles.informations}>
                <h2>{props.associationName}</h2>
                <h3>{props.associationCategory}</h3>
                <h4><LocationOnIcon/>{props.associationLocation}</h4>
                <h4><PhoneIcon/>{props.associationNumber}</h4>
            </div>
        </Card>
    )
}
export default Association;