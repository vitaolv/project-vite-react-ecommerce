import { useSelector, useDispatch } from "react-redux";
import { updatePriceTotalAction } from "../../store/actions/ActionsCart";
import "/src/css/asideBuyResume.css";

import { useEffect } from "react";

import { AiOutlineFileSearch } from "react-icons/ai";

import { getFormattedFinalPriceInstallmente } from "../../utils/prices/priceInstallment";
import { getFormattedPriceValue } from "../../utils/prices/priceUtils";

import { ModalPayment } from "../Modais/ModalPayment";
import { openModalToPaymentAction } from "../../store/actions/ActionsModais";

import { Button } from "antd";
export const ResumeAside = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.cart.priceTotal);
  const [numInstallments, formattedInstallmentValue] =
    getFormattedFinalPriceInstallmente(totalPrice);

  const isPaymentOpen = true;
  const handleToPayment = () => {
    dispatch(openModalToPaymentAction());
  };

  useEffect(() => {
    dispatch(updatePriceTotalAction());
  }, [dispatch]);

  return (
    <>
      <aside className="aside-buy-resume-content">
        <h3>
          <AiOutlineFileSearch /> Resumo
        </h3>
        <div className="aside-hr" />
        <div className="price-resume">
          <h5>Preço final a pagar: {getFormattedPriceValue(totalPrice)}</h5>
          <h6>
            ou em até {numInstallments} de: {formattedInstallmentValue}
          </h6>
        </div>
        <Button
          className="button-to-payment"
          size="large"
          onClick={handleToPayment}
        >
          <strong>Clique para pagamento</strong>
        </Button>
        <br />
      </aside>
      <ModalPayment isPaymentOpen={isPaymentOpen} />
    </>
  );
};
