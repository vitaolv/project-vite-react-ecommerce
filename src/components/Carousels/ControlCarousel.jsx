import "/src/css/Carousel.css";

import Carousel from "react-bootstrap/Carousel";
import { Link, useNavigate } from "react-router-dom";

export function ControlCarousel() {
  const navigate = useNavigate();

  return (
    <div className="content-carrousel">
      <Carousel variant="dark">
        <Carousel.Item>
          <Link to="/produto/Caixa%20de%20bombons%20sortidos/3">
            <img src="assets/promo.png" alt="First slide" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              const sectionIdToScrollTo = "content-card-about";
              window.scrollTo({
                top: document
                  .getElementById(sectionIdToScrollTo)
                  .getBoundingClientRect().top,
              });
            }}
          >
            <img src="assets/sobre-empresa.png" alt="Sobre a Empresa" />
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
