import React from 'react';
import styles from './TeamMembersSection.module.css'
import { Col, Container, Row } from "react-bootstrap";
import SalmanePic from '../../assets/Salmane.jpeg';
import JamalPic from '../../assets/Jamal.jpeg';
import HananePic from '../../assets/Hanane.jpeg';
import NajwaPic from '../../assets/Najwa.jpg';

const TeamMembersSection = () => {
    return (
        <Container className={styles.teamMembers}>
            <Row className="justify-content-md-center">
                <Col md="auto" className={styles.title}>
                    <h4> Our Team</h4>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                {/* <Col>
                    <img alt="Salmane" src={SalmanePic} className={styles.memberPic}/>
                </Col>
                <Col>
                    <img alt="Najwa" src={NajwaPic} className={styles.memberPic}/>
                </Col> */}
                <div className={styles.circlePic}>
                    <img alt="Salmane" src={SalmanePic} className={styles.memberPic}/>
                </div>
                <div className={styles.circlePic}>
                    <img alt="Najwa" src={NajwaPic} className={styles.memberPic}/>
                </div>
            </Row>
            <Row className="justify-content-md-center">
                <div className={styles.circlePic}>
                    <img alt="Hanane" src={HananePic} className={styles.memberPic}/>
                </div>
                <div className={styles.circlePic}>
                    <img alt="Jamal" src={JamalPic} className={styles.memberPic}/>
                </div>
            </Row>
        </Container>
    )
}

export default TeamMembersSection;