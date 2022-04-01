import { Col, Container, Row } from "react-bootstrap";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RecommendIcon from "@mui/icons-material/Recommend";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import styles from "./WhoWeAreSection.module.css";

const WhoWeAreSection = () => {
  return (
    // <div>
    <Container id={styles.container}>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1 className={styles.whoWeAre}>Who We Are</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <p id={styles.caption}>
            We built a powerful, trustworthy and an easy-to-use donation
            platform <br></br>for donation collectors and for donors.{" "}
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <p className={styles.definition}>
            {" "}
            Giving donations do not have to daunting and time consuming. You
            don't have to worry about which organization can you trust or where
            can you get donors for your association. Life Of Giving brings you
            the ultimate selection of fully trustworthy donors and organizations
            with various projects.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center" id={styles.descriptions}>
        <Col>
          <FavoriteBorderIcon className={styles.icon} /> <br />
          <p className={styles.desc}>
            Our platform is trusted by more than 4,000+ organizations of all
            sizes and causes, for various projects in major categories like
            disasters, social movements and environmental issues, human rights,
            ...
          </p>
        </Col>
        <Col>
          <RecommendIcon className={styles.icon} />
          <p className={styles.desc}>
            life of giving helps families to get back on their feet quickly. We
            helped people affected by the most dangerous natural disasters.
          </p>
        </Col>
        <Col>
          <AssuredWorkloadIcon className={styles.icon} />
          <p className={styles.desc}>
            Our administrators team works to ensure your safety and protect
            against any fraud. This is done by following a serious procedure
            before integring any kind of user to our platform.
          </p>
        </Col>
      </Row>
    </Container>
    // {/* </div> */}
  );
};

export default WhoWeAreSection;
