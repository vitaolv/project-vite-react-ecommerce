import { ListCart } from "../components/pageCartWithPayment/ListCart";
import { ResumeAside } from "../components/pageCartWithPayment/ResumeAside";

export default function CartWithPayment() {
  return (
    <div className="container-page-cartWithPayment">
      <h2>Meu carrinho de compras</h2>
      <ListCart />
      <ResumeAside />
    </div>
  );
}
