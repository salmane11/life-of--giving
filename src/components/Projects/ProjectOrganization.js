import styles from './ProjectOrganization.module.css';
import organizationPic from '../../assets/organizationPic.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useContext, useEffect, useState } from 'react';
import userContext from '../../store/userContext';
import useHttp, { organizationshost } from '../../store/requests';

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
const ProjectOrganization = ({organizationId}) => {

    const [oranizationInformations,setOrganizationInformations]=useState({});

    const userctx=useContext(userContext);

    const {isLoading,error,sendRequest:getOrganization}=useHttp();
    useEffect(()=>{
        getOrganization(
            {
                url:organizationshost+`/organisations/${organizationId}`,
                method:"get",
                headers:{
                    Authorization: userctx.userToken
                }
            },
            (data)=>{setOrganizationInformations(data)}
        )
    },[userctx.userToken,getOrganization,organizationId])

    return (
        <>
            <TitleSection title={'Organization'} marginLeftTitle={0}/>
                <div className={styles.organizationDesc}>
                    <Container>
                        <Row>
                            <Col sm={5}>
                                <img src={oranizationInformations.image?oranizationInformations.image:"/images/inko.png"} id={styles.projectOrganizationPic}/>
                            </Col>
                            <Col sm={5} id={styles.organizationInfos}>
                                <label><h4><b>{oranizationInformations.name}</b></h4></label>
                                <h6>{oranizationInformations.category} activities</h6>
                                <div>
                                    <LocationOnIcon/><span>{oranizationInformations.location}</span>
                                </div>
                                <div>
                                    <LocalPhoneIcon/><span>{oranizationInformations.phoneNumber}</span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
        </>
    )
}

export  {ProjectOrganization, TitleSection};