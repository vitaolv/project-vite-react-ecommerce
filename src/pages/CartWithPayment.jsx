import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { ButtonRemove } from "../components/Buttons/ButtonRemove";
import { Contador } from "../components/pageProductDetail/Contador";
import { updateQuantity } from "../store/actions/ActionsCart";

export default function CartWithPayment() {
  const cart = useSelector((state) => state.cart.productInCart);
  const dispatch = useDispatch();

  const handleQuantityChange = (idObj, newQuantity) => {
    dispatch(updateQuantity(idObj, newQuantity));
  };

  useEffect(() => {
    console.log("Atualizado", cart);
  }, [cart]);

  return (
    <div className="container-page-cartWithPayment">
      <h2>Meu carrinho de compras</h2>
      {cart && cart.length > 0 ? (
        <section className="list-cart">
          <div className="table-responsive">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Item</th>
                  <th>Quantidade</th>
                  <th>Preço</th>
                  <th>Subtotal</th>
                  <th className="action-table"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.objID}>
                    <td>{item.id}</td>
                    <td>
                      <div className="product-info">
                        <img
                          src={item.cover}
                          alt={item.name}
                          className="product-image"
                        />
                        <span>{item.name}</span>
                        {item.flavorSelected ? (
                          <div>
                            <br />
                            <span>
                              <strong>Sabor selecionado:</strong>{" "}
                              {item.flavorSelected}
                            </span>
                          </div>
                        ) : null}
                      </div>
                    </td>
                    <td>
                      <Contador
                        onQuantityChange={(newQuantity) =>
                          handleQuantityChange(item.objID, newQuantity)
                        }
                        initQuantity={item.quantity}
                      />
                    </td>

                    <td>{item.price}</td>
                    <td></td>
                    <td>
                      <ButtonRemove />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
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
  );
}
