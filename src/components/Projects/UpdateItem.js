import React, {useContext, useEffect} from 'react';
import styles from './UpdateItem.module.css';
import {Container, Row, Col} from 'react-bootstrap';
import imageUpdate from '../../assets/3.jpg';
import userContext from '../../store/userContext';
import useHttp from '../../store/requests';
import {organizationshost} from '../../store/requests'

const UpdateSection = () => {

    const userctx = useContext(userContext); 

    const transformUpdates = (updateList) => {
        const list = [];
        for (var key in updateList) {
            list.push({
                
            })
        }
    }

    const {isLoading, error, sendRequest:getUpdate} = useHttp();

    useEffect(() => {
        getUpdate(
            {
                url: organizationshost+"/update",
                method: "get",
                headers: {
                    Authorization: userctx.userToken,
                },

            },
            transformUpdates
        );
    }, [userctx.userTokan, getUpdate]);

    return (
        <>
            <div className={styles.updateSection}>
                <div>
                <Container>
                        <Row className={styles.row}>
                            <Col sm={5} className={styles.updatedImgContainer}>
                                <img src={imageUpdate} id={styles.projectOrganizationPic}/>
                            </Col>
                            <Col sm={5} id={styles.organizationInfos}>
                                <span id={styles.title}><b>Al Yusr Foundation</b></span><br/>
                                <span id={styles.updateDate}>3 days ago <br/></span>
                                <span id={styles.updateCategory}>Orphan activities</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default UpdateSection;