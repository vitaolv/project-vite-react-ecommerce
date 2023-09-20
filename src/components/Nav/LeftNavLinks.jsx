import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

export function LeftNavLinksComponents() {
  const navigate = useNavigate();

  return (
    <>
      <Nav.Link href="/project-vite-react-ecommerce/">Home</Nav.Link>
      <Nav.Link
        to="/"
        onClick={(event) => {
          event.preventDefault();
          navigate("/");
          const sectionIdToScrollTo = "slider-container";
          window.scrollTo({
            top: document
              .getElementById(sectionIdToScrollTo)
              .getBoundingClientRect().top,
          });
        }}
      >
        Nossos produtos
      </Nav.Link>
      <Nav.Link
        to="/"
        onClick={(event) => {
          event.preventDefault();
          navigate("/");
          const sectionIdToScrollTo = "content-card-about";
          window.scrollTo({
            top: document
              .getElementById(sectionIdToScrollTo)
              .getBoundingClientRect().top,
          });
        }}
      >
        Sobre nós
      </Nav.Link>
    </>
  );
}
