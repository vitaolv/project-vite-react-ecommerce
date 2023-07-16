import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function CartWithPayment() {
  const cart = useSelector((state) => state.cart.ProductInCart);
  return (
    <>
      <div className="container-page-cartWithPayment">
        <br />
        <h2>Meu carrinho de compras</h2>
        {cart && cart.length > 0 ? (
          cart.map((item) => (
            <ul key={item} className="list-productInCart">
              {cart}
            </ul>
          ))
        ) : (
          <div className="cart-without-products">
            <img src="/assets/cart-without-products.png"></img>
            <h4>Seu carrinho de compras está vazio.</h4>
            <p>
              Há produtos esperam por você, <Link to="/">dê uma olhada.</Link>{" "}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
