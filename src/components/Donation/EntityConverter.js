import { useState } from 'react';
import styles from './EntityConverter.module.css'

const EntityConverter = ({entity, entityPrice, target}) => {

    // we set a target for the group
    let totalEntities = Math.trunc(target/entityPrice);

    const [helpedEntitiesNumber, setHelpedEntitiesNumber] = useState(0);

    function handleChange(event){
        let givenDonation = event.target.value;
        setHelpedEntitiesNumber(  Math.trunc(givenDonation/entityPrice) );
    }

    return (
        <div>
            <form className={styles.converter}>
                <label htmlFor="donatedMoney" id={styles.label}>Money:  </label>
                <input id={styles.donatedMoney} type="text" onChange={handleChange}/>
                <label id={styles.label}> {helpedEntitiesNumber} {entity}, from the total of {totalEntities}.</label>
            </form>
            <p>For each {entity} we need ${entityPrice}</p>
        </div>
    )
}

export default EntityConverter;