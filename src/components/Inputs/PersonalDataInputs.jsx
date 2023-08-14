import { useState } from "react";
import PropTypes from "prop-types";
import { handleCPFChange } from "../../utils/formatteDate/HandleCPFChange";
import { handleTelephoneChange } from "../../utils/formatteDate/HandleTelephoneChange";
import { handlePhoneChange } from "../../utils/formatteDate/HandlePhoneChange";
import { handleNameChange } from "../../utils/formatteDate/HandleNameCHange";
import { handleEmailChange } from "../../utils/formatteDate/HandleEmailChange";
import { handleDateChange } from "../../utils/formatteDate/HandleDateChange";
import { FormDataPersonal } from "./forms/formDataPersonal";

export function PersonalDataInputs({ formData, handleChange, setValidation }) {
  const dateFormat = "DD/MM/YYYY";
  const handleDateChangeWrapper = (date, dateString) => {
    handleDateChange(date, dateString, dateFormat, handleChange);
  };

  const [cpf, setCPF] = useState("");
  const handleCPFChangeWrapper = (e) => {
    handleCPFChange(e.target.value, setCPF, handleChange);
  };

  const [telefone, setTelefone] = useState("");
  const handleTelephoneChangeWrapper = (e) => {
    handleTelephoneChange(e.target.value, setTelefone, handleChange);
  };

  const [phone, setPhone] = useState("");
  const handlePhoneChangeWrapper = (e) => {
    handlePhoneChange(e.target.value, setPhone, handleChange);
  };

  const handleNameChangeWrapper = (e) => {
    handleNameChange(e.target.value, handleChange);
  };

  const handleEmailChangeWrapper = (e) => {
    handleEmailChange(e.target.value, handleChange);
  };

  return (
    <FormDataPersonal
      formData={formData}
      dateFormat={dateFormat}
      handleDateChangeWrapper={handleDateChangeWrapper}
      handleCPFChangeWrapper={handleCPFChangeWrapper}
      handleTelephoneChangeWrapper={handleTelephoneChangeWrapper}
      handlePhoneChangeWrapper={handlePhoneChangeWrapper}
      handleNameChangeWrapper={handleNameChangeWrapper}
      handleEmailChangeWrapper={handleEmailChangeWrapper}
    />
  );
}

PersonalDataInputs.propTypes = {
  formData: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    dataNascimento: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telefone: PropTypes.string.isRequired,
    celular: PropTypes.string, // OPCIONAL
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  setValidation: PropTypes.func.isRequired,
};
