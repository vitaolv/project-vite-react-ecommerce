import "/src/css/header.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addToCartAction } from "../store/actions/ActionsCart";
import { SearchHeader } from "../components/Search/SearchHeader";
import { LeftNavLinksComponents } from "../components/Nav/LeftNavLinks";
import { RightNavLinksComponent } from "../components/Nav/RightNavLinks";

export default function Header() {
  const quantityTotal = useSelector((state) => state.cart.quantityTotal);
  const productInCart = useSelector((state) => state.cart.productInCart);
  const dispatch = useDispatch();

  useEffect(() => {
    const cartItemCountFromStorage = localStorage.getItem("productInCart");
    if (cartItemCountFromStorage) {
      try {
        const cartItems = JSON.parse(cartItemCountFromStorage);
        if (Array.isArray(cartItems)) {
          cartItems.forEach((item) => {
            dispatch(addToCartAction(item));
          });
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    console.log("Cart Item Count:", productInCart?.length);
    console.log("Carrinho:", productInCart);
    console.log("Total Item Count:", quantityTotal);
  }, [productInCart, quantityTotal]);

  return (
    <Navbar variant="light" className="color-nav" expand="lg">
      <Container fluid className="main-nav">
        <Navbar.Brand className="logo" href="/project-vite-react-ecommerce/">
          ToSweeten
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-lg-0 my-2 me-auto"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <LeftNavLinksComponents />
          </Nav>

          <div className="agrupamento-direita">
            <RightNavLinksComponent
              productInCart={productInCart}
              quantityTotal={quantityTotal}
            />
            <SearchHeader />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
