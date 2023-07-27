import { ListCart } from "../components/pageCartWithPayment/ListCart";
import { ResumeAside } from "../components/pageCartWithPayment/ResumeAside";
import { ButtonClearCart } from "../components/Buttons/ButtonClearCart";
import { ModalConfirmationToClearCart } from "../components/Modais/ModalConfirmationToClearCart";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

export default function CartWithPayment() {
  const cart = useSelector((state) => state.cart.productInCart);

  return (
    <>
      <div className="container-page-cartWithPayment">
        <h2>Meu carrinho de compras</h2>

        {cart.length > 0 ? (
          <>
            <ButtonClearCart />
            <div className="cart-container">
              <ListCart />
              <ResumeAside />
            </div>

            <ModalConfirmationToClearCart />
          </>
        ) : (
          <>
            <div className="cart-without-products">
              <img
                src="/assets/cart-without-products.png"
                alt="Carrinho vazio"
              />
              <h4>Seu carrinho de compras está vazio.</h4>
              <p>
                Há produtos esperam por você, <Link to="/">dê uma olhada.</Link>{" "}
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
