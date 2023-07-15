import { useSelector } from "react-redux";

export default function CartWithPayment() {
  return (
    <>
      <div className="container-page-cartWithPayment">
        <h1>Meu carrinho</h1>
        <ul className="list-productInCart"></ul>
      </div>
    </>
  );
}
