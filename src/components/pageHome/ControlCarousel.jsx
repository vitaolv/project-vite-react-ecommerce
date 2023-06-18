import Carousel from "react-bootstrap/Carousel";

export function ControlCarousel() {
  return (
    <div className="content-carrousel">
      <Carousel variant="dark">
        <Carousel.Item>
          <a href="#">
            <img src="/assets/promo.png" alt="First slide" />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="#">
            <img src="/assets/sobre-empresa.png" alt="Second slide" />
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
