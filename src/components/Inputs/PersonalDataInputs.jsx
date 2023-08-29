import PropTypes from "prop-types";
import { handleCPFChange } from "../../utils/formatteDate/HandleCPFChange";
import { handleTelephoneChange } from "../../utils/formatteDate/HandleTelephoneChange";
import { handlePhoneChange } from "../../utils/formatteDate/HandlePhoneChange";
import { handleNameChange } from "../../utils/formatteDate/HandleNameChange";
import { handleEmailChange } from "../../utils/formatteDate/HandleEmailChange";
import { handleDateChange } from "../../utils/formatteDate/HandleDateChange";
import { FormDataPersonal } from "./forms/FormDataPersonal";

export function PersonalDataInputs({ formData, handleChange }) {
  const handleDateChangeWrapper = (date, dateString) => {
    handleDateChange(date, dateString, handleChange);
  };

  const handleCPFChangeWrapper = (e) => {
    handleCPFChange(e.target.value, handleChange);
  };

  const handleTelephoneChangeWrapper = (e) => {
    handleTelephoneChange(e.target.value, handleChange);
  };

  const handlePhoneChangeWrapper = (e) => {
    handlePhoneChange(e.target.value, handleChange);
  };

  const handleNameChangeWrapper = (e) => {
    handleNameChange(e.target.value, handleChange);
  };

  const handleEmailChangeWrapper = (e) => {
    handleEmailChange(e.target.value, handleChange);
  };

  return (
    <div className="center">
      <h5>Dados pessoais</h5>
      <br />
      <FormDataPersonal
        formData={formData}
        handleDateChangeWrapper={handleDateChangeWrapper}
        handleCPFChangeWrapper={handleCPFChangeWrapper}
        handleTelephoneChangeWrapper={handleTelephoneChangeWrapper}
        handlePhoneChangeWrapper={handlePhoneChangeWrapper}
        handleNameChangeWrapper={handleNameChangeWrapper}
        handleEmailChangeWrapper={handleEmailChangeWrapper}
      />
    </div>
  );
}

PersonalDataInputs.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
