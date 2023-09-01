import "/src/css/DialogPayment/BoletoText.css";

import { useSelector } from "react-redux";
import { getFormattedPriceValue } from "../../utils/prices/priceUtils";

export function SelectedPaymentIsBoleto() {
  const value = useSelector((state) => state.cart.priceTotal);

  return (
    <>
      <div className="boleto center">
        <p>
          <strong>Vencimento em 1 dia útil.</strong> A data de entrega será
          ajustada devido ao tempo de processamento do boleto.
        </p>
        <br />
        <p>
          <strong>Leia com atenção:</strong>
        </p>
        <p>
          {" "}
          • Antes de finalizar a compra, revise seus dados e os itens
          selecionados na próxima etapa (revisão do pedido).
        </p>
        <p>
          {" "}
          • Após a conclusão do pedido, você receberá o boleto por e-mail, no
          endereço cadastrado.
        </p>
      </div>
      <br />
      <p>
        <strong>Valor a pagar à vista: {getFormattedPriceValue(value)}</strong>
      </p>
    </>
  );
}
