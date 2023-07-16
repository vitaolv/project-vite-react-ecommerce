import { useSelector } from "react-redux";
import { ButtonRemove } from "../components/Buttons/ButtonRemove";

export default function CartWithPayment() {
  const cart = useSelector((state) => state.cart.productInCart);

  const handleQuantityChange = (productId, newQuantity) => {
    // Atualize a quantidade do produto no carrinho
    // Utilize o Redux ou outra forma de gerenciamento de estado
  };

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
                  <th>Sabor</th>
                  <th>Preço</th>
                  <th>Subtotal</th>
                  <th className="action-table"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                      <div className="product-info">
                        <img
                          src={item.cover}
                          alt={item.name}
                          className="product-image"
                        />
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td>
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            item.id,
                            parseInt(e.target.value)
                          )
                        }
                      >
                        {/* Opções para a quantidade */}
                      </select>
                    </td>
                    <td>{item.flavorSelected}</td>
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
          {/* Conteúdo quando o carrinho está vazio */}
        </div>
      )}
    </div>
  );
}
