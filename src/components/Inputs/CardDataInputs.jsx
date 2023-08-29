import ReCAPTCHA from "react-google-recaptcha";
import PropTypes from "prop-types";
import { FormCard } from "./forms/FormCard";
import { handleCardNameChange } from "../../utils/formatteDate/HandleCardNameChange";
import { HandleCardNumberChange } from "../../utils/formatteDate/HandleCardNumberChange";
import { HandleCardExpirationChange } from "../../utils/formatteDate/HandleVencimento";
import { HandleCardCVVChange } from "../../utils/formatteDate/HandleCVVChange";
import { PaymentMethodsRadio } from "../Radios/PaymentMethodsRadio";
import { useState } from "react";
import { SelectedPaymentIsBoleto } from "../Texts/SelectedPaymentIsBoleto";

export function CardDataInputs({ formData, handleChange }) {
  const handleCardNameChangeWrapper = (e) => {
    handleCardNameChange(e.target.value, handleChange);
  };

  const handleCardNumberChangeWrapper = (e) => {
    HandleCardNumberChange(e.target.value, handleChange);
  };

  const handleCardExpirationChangeWrapper = (e) => {
    HandleCardExpirationChange(e.target.value, handleChange);
  };

  const handleCardCVVChangeWrapper = (e) => {
    HandleCardCVVChange(e.target.value, handleChange);
  };

  const [selectedOption, setSelectedOption] = useState("Boleto");

  const handleRecaptchaVerify = (token) => {
    console.log("reCAPTCHA Token:", token);
    // Aqui você pode usar o token como quiser, por exemplo, enviá-lo para uma API
  };

  return (
    <div>
      <h5 className="center">Formas de pagamento</h5>
      <br />
      <PaymentMethodsRadio
        setSelectedOption={setSelectedOption}
        handleChange={handleChange}
      />
      <br />
      {selectedOption === "Boleto" ? (
        <SelectedPaymentIsBoleto />
      ) : (
        <>
          <FormCard
            formData={formData}
            handleChange={handleChange}
            handleCardNameChangeWrapper={handleCardNameChangeWrapper}
            handleCardNumberChangeWrapper={handleCardNumberChangeWrapper}
            handleCardExpirationChangeWrapper={
              handleCardExpirationChangeWrapper
            }
            handleCardCVVChangeWrapper={handleCardCVVChangeWrapper}
          />
          <div style={{ margin: "0.5rem" }}>
            <ReCAPTCHA sitekey="chave aqui" onChange={handleRecaptchaVerify} />
          </div>
        </>
      )}
    </div>
  );
}

CardDataInputs.propTypes = {
  formData: PropTypes.object.isRequired,
  recaptchaRef: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
};
