import { useSelector } from "react-redux/es/hooks/useSelector";

export const ResumeAside = () => {
  const totalPrice = useSelector((state) => state.cart.priceTotal);

  return (
    <aside>
      <h2>Resumo</h2>
      <p>Este é um resumo do conteúdo principal da página. {totalPrice}</p>
    </aside>
  );
};
