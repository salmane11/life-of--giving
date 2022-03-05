import Carousel from 'react-bootstrap/Carousel';
import styles from './ProjectCarousel.module.css';
import image1 from '../../assets/3.jpg';
import image2 from '../../assets/5.jpg';
import image3 from '../../assets/1.jpg'

// the slider of the images of a project created using react bootstrap
const ProjectCarousel = () => {
    return (
        <Carousel className={styles.carousel}>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={image2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className="d-block w-100"
                src={image3}
                alt="Third slide"
                />
            </Carousel.Item>
    </Carousel>
    )
}

export default ProjectCarousel;