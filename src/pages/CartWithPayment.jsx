import "/src/css/pageCartWithPayment.css";

import { ListCart } from "../components/Lists/ListCart";
import { ResumeAside } from "../components/Asides/ResumeAside";
import { ButtonClearCart } from "../components/Buttons/ButtonClearCart";
import { ModalConfirmationToClearCart } from "../components/Modais/ModalConfirmationToClearCart";
import { SkeletonImageComponent } from "../components/Skeleton/SkeletonImageComponents";
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
              <SkeletonImageComponent
                productImage="/project-vite-react-ecommerce/assets/cart-without-products.png"
                productName="Carrinho vazio image"
                className="cart-without-products"
              />
              <h4>Seu carrinho de compras está vazio.</h4>
              <p>
                Há produtos esperam por você,{" "}
                <Link to="/project-vite-react-ecommerce/">dê uma olhada.</Link>{" "}
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
