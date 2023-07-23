import { useSelector, useDispatch } from "react-redux";
import { updatePriceTotalAction } from "../../store/actions/ActionsCart";
import { getFormattedInstallmentValue } from "../../utils/prices/priceUtils";
import { useEffect } from "react";

export const ResumeAside = () => {
  const totalPrice = useSelector((state) => state.cart.priceTotal);
  const dispatch = useDispatch();

  const handleUpdatePriceTotal = () => {
    dispatch(updatePriceTotalAction());
  };

  useEffect(() => {
    handleUpdatePriceTotal();
  }, [handleUpdatePriceTotal]);

  return (
    <aside>
      <h2>Resumo</h2>
      <p>
        Este é um resumo do conteúdo principal da página.{" "}
        {getFormattedInstallmentValue(totalPrice)}
      </p>
    </aside>
  );
};
