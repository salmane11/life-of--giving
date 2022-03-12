import styles from './ProjectOrganization.module.css';
import organizationPic from '../../assets/organizationPic.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

// the title component of each section of the page
const TitleSection = ({title, marginLeftTitle}) => {
    return (
        <div style={{width:'77%', marginBottom:10}}>
                <h1 style={{
                    fontFamily: 'var(--titles-font)',
                    color: 'var(--third-color)',
                    fontSize: 30,
                    paddingLeft: 16,
                    borderLeft: '4px solid var(--second-color)',
                    marginLeft: marginLeftTitle,
            
                }}> {title} </h1>
        </div>
    )
}

// the organization which published the project post
const ProjectOrganization = () => {

    return (
        <>
            <TitleSection title={'Organization'} marginLeftTitle={0}/>
                <div className={styles.organizationDesc}>
                    <Container>
                        <Row>
                            <Col sm={5}>
                                <img src={organizationPic} id={styles.projectOrganizationPic}/>
                            </Col>
                            <Col sm={5} id={styles.organizationInfos}>
                                <label><h4><b>Al Yusr Foundation</b></h4></label>
                                <h6>Orphan activities</h6>
                                <div>
                                    <LocationOnIcon/><span>Rabat, Morocco</span>
                                </div>
                                <div>
                                    <LocalPhoneIcon/><span>+212561617877</span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
        </>
    )
}

export  {ProjectOrganization, TitleSection};