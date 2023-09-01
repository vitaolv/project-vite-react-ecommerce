import "/src/css/DialogPayment/PaymentMethodsRadios.css";

import { Radio } from "antd";
import { BarcodeOutlined, CreditCardOutlined } from "@ant-design/icons";

import PropTypes from "prop-types";

export function PaymentMethodsRadio({ setSelectedOption, handleChange }) {
  const handleSelectedOption = (e) => {
    let valueOption = e.target.value;
    setSelectedOption(valueOption);

    handleChange({
      target: {
        name: "formasDePagamento",
        value: valueOption,
      },
    });
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
  handleChange: PropTypes.func.isRequired,
};
