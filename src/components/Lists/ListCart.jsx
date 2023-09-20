import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { ButtonRemove } from "../Buttons/ButtonRemove";
import { Contador } from "../Count/Contador";
import { updateQuantityAction } from "../../store/actions/ActionsCart";
import { getFormattedPriceValue } from "../../utils/prices/priceUtils";
import { ModalConfirmationToRemove } from "../Modais/ModalConfirmationToRemove";
import { SkeletonImageComponent } from "../Skeleton/SkeletonImageComponents";

export function ListCart() {
  const cart = useSelector((state) => state.cart.productInCart);
  const dispatch = useDispatch();
  const handleQuantityChange = (idObj, newQuantity) => {
    dispatch(updateQuantityAction(idObj, newQuantity));
  };

  useEffect(() => {
    console.log("Atualizado", cart);
  }, [cart]);

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  return (
    <>
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
                    <SkeletonImageComponent
                      productImage={item.cover[0]}
                      productName={item.name}
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
                    {getFormattedPriceValue(item.price)}
                  </span>
                  <br />
                  <hr />
                  <span>
                    Preço subtotal: <br />
                    {getFormattedPriceValue(
                      calculateSubtotal(item.price, item.quantity)
                    )}
                  </span>
                </div>
                <div className="item-action">
                  <ButtonRemove item={item} />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ModalConfirmationToRemove />
      </section>
    </>
  );
}
