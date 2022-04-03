import React, {useState} from 'react';
import styles from './TeamMembersSection.module.css'
import { Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import SalmanePic from '../../assets/Salmane.jpeg';
import JamalPic from '../../assets/Jamal.jpeg';
import HananePic from '../../assets/Hanane.jpeg';
import NajwaPic from '../../assets/Najwa.jpg';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const TeamMembersSection = () => {
   
    const [anchorEl1, setAnchorEl1] = useState(null);
    const handleEnter1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl1(null);
    };
    const open1 = Boolean(anchorEl1);


    const [anchorEl2, setAnchorEl2] = useState(null);
    const handleEnter2=(event)=>{
        setAnchorEl2(event.currentTarget);
    }
    const handleClose2 = (event) => {
        setAnchorEl2(null);
    }
    const open2= Boolean(anchorEl2)

    const [anchorEl3, setAnchorEl3] = useState(null);
    const handleEnter3=(event)=>{
        setAnchorEl3(event.currentTarget);
    }
    const handleClose3 = (event) => {
        setAnchorEl3(null);
    }
    const open3= Boolean(anchorEl3)


    const [anchorEl4, setAnchorEl4] = useState(null);
    const handleEnter4=(event)=>{
        setAnchorEl4(event.currentTarget);
    }
    const handleClose4 = (event) => {
        setAnchorEl4(null);
    }
    const open4= Boolean(anchorEl4)
    

    return (
        <Container className={styles.teamMembers}>
            <Row className="justify-content-md-center">
                <Col md="auto" className={styles.title}>
                    <h4> Our Team</h4>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <div className={styles.circlePic} 
                onMouseEnter={handleEnter1} 
                onMouseLeave={handleClose1}
                aria-describedby={open1 ? 'mouse-over-popover' : undefined}
                >
                    <img alt="Salmane" src={SalmanePic} className={styles.memberPic}/>
                    {/* here we create the popover of each picture */}
                    <Popover
                            // id={id}
                            id="mouse-over-popover"
                            sx={{
                                pointerEvents: 'none',
                              }}
                            open={open1}
                            anchorEl={anchorEl1}
                            onClose={handleClose1}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            disableRestoreFocus
                        >
                            <Typography sx={{ p: 2 }}>Salmane Chafik <br/>
                             Software Engineering Student At the INPT <br/>
                             E-mail Adress: salmanchafik@gmail.com
                             </Typography>
                        </Popover>
                </div>
                <div className={styles.circlePic}
                onMouseEnter={handleEnter2} 
                onMouseLeave={handleClose2}
                aria-describedby={open2 ? 'mouse-over-popover2' : undefined}
                >
                    <img alt="Najwa" src={NajwaPic} className={styles.memberPic}/>
                    <Popover
                            // id={id}
                            id="mouse-over-popover2"
                            sx={{
                                pointerEvents: 'none',
                              }}
                            open={open2}
                            anchorEl={anchorEl2}
                            onClose={handleClose2}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            disableRestoreFocus
                        >
                            <Typography sx={{ p: 2 }}>Najwa Lakmouri <br/>
                             Software Engineering Student At the INPT <br/>
                             E-mail Adress: najwa.lakmouri1@gmail.com
                             </Typography>
                        </Popover>
                </div>
            </Row>
            <Row className="justify-content-md-center">
                <div className={styles.circlePic}
                onMouseEnter={handleEnter3} 
                onMouseLeave={handleClose3}
                aria-describedby={open3 ? 'mouse-over-popover3' : undefined}
                >
                    <img alt="Hanane" src={HananePic} className={styles.memberPic}/>
                    <Popover
                            // id={id}
                            id="mouse-over-popover3"
                            sx={{
                                pointerEvents: 'none',
                              }}
                            open={open3}
                            anchorEl={anchorEl3}
                            onClose={handleClose3}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            disableRestoreFocus
                        >
                            <Typography sx={{ p: 2 }}>Hanane Taouil <br/>
                             Software Engineering Student At the INPT <br/>
                             E-mail Adress: hanane59toauil@gmail.com
                             </Typography>
                        </Popover>
                </div>
                <div className={styles.circlePic}
                onMouseEnter={handleEnter4} 
                onMouseLeave={handleClose4}
                aria-describedby={open4 ? 'mouse-over-popover4' : undefined}
                >
                    <img alt="Jamal" src={JamalPic} className={styles.memberPic}/>
                    <Popover
                            // id={id}
                            id="mouse-over-popover4"
                            sx={{
                                pointerEvents: 'none',
                              }}
                            open={open4}
                            anchorEl={anchorEl4}
                            onClose={handleClose4}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            disableRestoreFocus
                        >
                            <Typography sx={{ p: 2 }}>Jamal Ait Salh <br/>
                             Software Engineering Student At the INPT <br/>
                             E-mail Adress: jamalAitsalh@gmail.com
                             </Typography>
                        </Popover>
                </div>
            </Row>
        </Container>
    )
}

export default TeamMembersSection;