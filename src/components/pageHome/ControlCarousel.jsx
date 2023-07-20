import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export function ControlCarousel() {
  return (
    <div className="content-carrousel">
      <Carousel variant="dark">
        <Carousel.Item>
          <Link to="/produto/Caixa%20de%20bombons%20sortidos/3">
            <img src="/assets/promo.png" alt="First slide" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="#">
            <img src="/assets/sobre-empresa.png" alt="Second slide" />
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
