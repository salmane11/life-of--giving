import {TitleSection} from './ProjectOrganization';
import UpdateItem from './UpdateItem';
import styles from './UpdateItem.module.css';

const Updates = (props) => {
    return (
        <>
            <TitleSection title={'Updates'}/>    
            <UpdateItem projectId={props.projectId}/>
        </>
    )
}

export default Updates;