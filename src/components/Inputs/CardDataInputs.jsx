import ReCAPTCHA from "react-google-recaptcha";

import PropTypes from "prop-types";
import { FormCard } from "./forms/formCard";
import { handleCardNameChange } from "../../utils/formatteDate/HandleCardNameChange";
import { HandleCardNumberChange } from "../../utils/formatteDate/HandleCardNumberChange";
import { HandleCardExpirationChange } from "../../utils/formatteDate/HandleVencimento";
import { HandleCardCVVChange } from "../../utils/formatteDate/HandleCVVChange";

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

  return (
    <div>
      <h2>Formas de Pagamento</h2>

      <FormCard
        formData={formData}
        handleChange={handleChange}
        handleCardNameChangeWrapper={handleCardNameChangeWrapper}
        handleCardNumberChangeWrapper={handleCardNumberChangeWrapper}
        handleCardExpirationChangeWrapper={handleCardExpirationChangeWrapper}
        handleCardCVVChangeWrapper={handleCardCVVChangeWrapper}
      />

      <div style={{ margin: "2rem" }}>
        <ReCAPTCHA sitekey="SUA_CHAVE_PUBLICA_DO_RECAPTCHA" />
      </div>
    </div>
  );
}

CardDataInputs.propTypes = {
  formData: PropTypes.shape({
    numeroDoCartao: PropTypes.string.isRequired,
    nomeEscritoNoCartao: PropTypes.string.isRequired,
    vencimento: PropTypes.string.isRequired,
    cvv: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};
