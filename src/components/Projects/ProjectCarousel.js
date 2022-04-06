import Carousel from 'react-bootstrap/Carousel';
import styles from './ProjectCarousel.module.css';
import image1 from '../../assets/3.jpg';
import image2 from '../../assets/5.jpg';
import image3 from '../../assets/1.jpg'

// the slider of the images of a project created using react bootstrap
const ProjectCarousel = (props) => {
    return (
        <Carousel className={styles.carousel}>
            <Carousel.Item interval={4000}>
                <img
                className="d-block w-100"
                src={props.image ? props.image :"/images/inko.png"}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img
                className="d-block w-100"
                src={props.image ? props.image :"/images/inko.png"}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img className="d-block w-100"
                src={props.image ? props.image :"/images/inko.png"}
                alt="Third slide"
                />
            </Carousel.Item>
    </Carousel>
    )
}

export default ProjectCarousel;