import { Radio } from "antd";
import { BarcodeOutlined, CreditCardOutlined } from "@ant-design/icons";

import PropTypes from "prop-types";

export function PaymentMethodsRadio({ setSelectedOption }) {
  const handleSelectedOption = (e) => {
    setSelectedOption(e.target.value);
  };

  const PaymentOptions = [
    {
      label: (
        <span>
          <BarcodeOutlined /> Boleto
        </span>
      ),
      value: "Boleto",
    },
    {
      label: (
        <span>
          <CreditCardOutlined /> Cartão de crédito
        </span>
      ),
      value: "Cartão de crédito",
    },
  ];
  return (
    <div className="center">
      <Radio.Group
        optionType="button"
        options={PaymentOptions}
        onChange={handleSelectedOption}
        defaultValue="Boleto"
      ></Radio.Group>
    </div>
  );
}

PaymentMethodsRadio.propTypes = {
  setSelectedOption: PropTypes.func.isRequired,
};
