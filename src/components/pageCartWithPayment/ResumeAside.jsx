import { useSelector, useDispatch } from "react-redux";
import { updatePriceTotalAction } from "../../store/actions/ActionsCart";
import { useEffect } from "react";

import { AiOutlineFileSearch } from "react-icons/ai";

import { getFormattedFinalPriceInstallmente } from "../../utils/prices/priceInstallment";
import { getFormattedPriceValue } from "../../utils/prices/priceUtils";

export const ResumeAside = () => {
  const totalPrice = useSelector((state) => state.cart.priceTotal);
  const [numInstallments, formattedInstallmentValue] =
    getFormattedFinalPriceInstallmente(totalPrice);

  const dispatch = useDispatch();

  const handleUpdatePriceTotal = () => {
    dispatch(updatePriceTotalAction());
  };

  useEffect(() => {
    handleUpdatePriceTotal();
  }, [handleUpdatePriceTotal]);

  return (
    <aside className="aside-buy-resume-content">
      <h3>
        <AiOutlineFileSearch /> Resumo
      </h3>
      <hr />
      <div className="price-resume">
        <h5>Preço final a pagar: {getFormattedPriceValue(totalPrice)}</h5>
        <h6>
          ou em até {numInstallments} de: {formattedInstallmentValue}
        </h6>
      </div>
      <br />
      <button className="button-to-payment">
        <strong>Clique para pagamento</strong>
      </button>
    </aside>
  );
};
