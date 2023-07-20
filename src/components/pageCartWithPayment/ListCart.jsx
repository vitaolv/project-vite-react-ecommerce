import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { ButtonRemove } from "../Buttons/ButtonRemove";
import { Contador } from "../Count/Contador";
import { updateQuantity } from "../../store/actions/ActionsCart";
import { getFormattedInstallmentValue } from "../../utils/prices/priceUtils";

export function ListCart() {
  const cart = useSelector((state) => state.cart.productInCart);
  const dispatch = useDispatch();
  const handleQuantityChange = (idObj, newQuantity) => {
    dispatch(updateQuantity(idObj, newQuantity));
  };

  useEffect(() => {
    console.log("Atualizado", cart);
  }, [cart]);

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  return (
    <>
      {cart && cart.length > 0 ? (
        <section className="list-cart">
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.objID} className="cart-item">
                <div className="item-info">
                  <Link
                    key={item.objID}
                    to={`/produto/${encodeURIComponent(item.name)}/${item.id}`}
                    className={`card-hover ${
                      location.pathname ===
                      `/produto/${encodeURIComponent(item.name)}/${item.id}`
                        ? "active"
                        : ""
                    }`}
                  >
                    <div className="product-details">
                      <img
                        src={item.cover}
                        alt={item.name}
                        className="product-image"
                      />
                      <span>
                        <strong>{item.name}</strong>
                      </span>
                      <span>ID de item: {item.id}</span>
                      {item.flavorSelected && (
                        <div>
                          <span>
                            <strong>Sabor selecionado:</strong>{" "}
                            {item.flavorSelected}
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>
                  <div className="quantity-control">
                    <span>Quantidade:</span>
                    <Contador
                      onQuantityChange={(newQuantity) =>
                        handleQuantityChange(item.objID, newQuantity)
                      }
                      initQuantity={item.quantity}
                    />
                  </div>
                  <div className="item-price">
                    <span>
                      Preço: <br />
                      {getFormattedInstallmentValue(item.price)}
                    </span>
                    <br />
                    <hr />
                    <span>
                      Preço subtotal: <br />
                      {getFormattedInstallmentValue(
                        calculateSubtotal(item.price, item.quantity)
                      )}
                    </span>
                  </div>
                  <div className="item-action">
                    <ButtonRemove />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <div className="cart-without-products">
          <img src="/assets/cart-without-products.png" alt="Carrinho vazio" />
          <h4>Seu carrinho de compras está vazio.</h4>
          <p>
            Há produtos esperam por você, <Link to="/">dê uma olhada.</Link>{" "}
          </p>
        </div>
      )}
    </>
  );
}
