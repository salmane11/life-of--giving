import React, { useContext, useEffect, useState } from "react";
import styles from "./UpdateItem.module.css";
import { Container, Row, Col } from "react-bootstrap";
import imageUpdate from "../../assets/3.jpg";
import userContext from "../../store/userContext";
import useHttp from "../../store/requests";
import { organizationshost } from "../../store/requests";

const UpdateSection = (props) => {
  const [updates, setUpdates] = useState([]);

  const userctx = useContext(userContext);

  const transformUpdates = (updateList) => {
    const list = [];
    for (var key in updateList) {
      list.push({
        updateId: updateList[key].id,
        updateDate: updateList[key].date,
        updateDescription: updateList[key].description,
        updateImage: updateList[key].image,
      });
    }
    setUpdates(list);
  };

  const { isLoading, error, sendRequest: getUpdate } = useHttp();

  useEffect(() => {
    getUpdate(
      {
        url: organizationshost + `/organ/updates/${props.projectId}`,
        method: "get",
        headers: {
          Authorization: userctx.userToken,
        },
      },
      transformUpdates
    );
  }, [userctx.userToken, getUpdate]);

  return (
    <>
      <div className={styles.updateSection}>
        <div>
          <Container>
            {updates.map((update) => (
              <Row key={update.updateId} className={styles.row}>
                <Col sm={5} className={styles.updatedImgContainer}>
                  <img
                    src={update.updateImage?update.updateImage:"/images/inko.png"}
                    id={styles.projectOrganizationPic}
                  />
                </Col>
                <Col sm={5} id={styles.organizationInfos}>
                  <span id={styles.updateDate}>
                    {update.updateDate} <br />
                  </span>
                  <span id={styles.updateCategory}>Orphan activities</span>
                  <p>{update.updateDescription}</p>
                </Col>
              </Row>
            ))}
          </Container>
        </div>
      </div>
    </>
  );
};

export default UpdateSection;
