import styles from './ProjectOrganization.module.css';
import organizationPic from '../../assets/organizationPic.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

const ProjectOrganization = () => {

    return (
        <>
            <div className={styles.organizationSection}>
                <h1>Organization</h1>
                <div className={styles.organizationDesc}>
                    <Container>
                        <Row>
                            <Col sm={8}><img src={organizationPic}/></Col>
                            <Col sm={4}><label>Al Yusr Foundation</label></Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default ProjectOrganization;