import { Col, Container, Row } from "react-bootstrap";
import styles from './WhoWeAreSection.module.css'

const WhoWeAreSection = () => {
    return (
        // <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <h1 className={styles.whoWeAre}>Who We Are</h1>
                    </Col>
                </Row>
            </Container>
        // {/* </div> */}
    )
}

export default WhoWeAreSection;