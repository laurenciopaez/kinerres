import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../../../images/CaroulselImage";
import { Image } from "react-bootstrap";

function Slides() {
  return (
    <Carousel fade>
      <Carousel.Item interval={3000}>
        <Image src="./images/pic1.jpg" />

      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <ExampleCarouselImage text="web-development" />

      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <ExampleCarouselImage text="web-design" />

      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;
