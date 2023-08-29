import PropTypes from "prop-types";

import { FormDataLocal } from "./forms/FormDataLocal";

import { handleCEPChange } from "../../utils/formatteDate/HandleCEPChange";
import { handleAddressChange } from "../../utils/formatteDate/HandleAddressChange";
import { HandleComplementoChange } from "../../utils/formatteDate/HandleComplementChange";
import { handleNumberChange } from "../../utils/formatteDate/HandleNumberChange";
import { handleCityChange } from "../../utils/formatteDate/HangleCityChange";

export function LocalDataInputs({ formData, handleChange }) {
  const handleCEPChangeWrapper = (e) => {
    handleCEPChange(e.target.value, handleChange);
  };

  const handleAddressChangeWrapper = (e) => {
    handleAddressChange(e.target.value, handleChange);
  };

  const handleNumberChangeWrapper = (e) => {
    handleNumberChange(e.target.value, handleChange);
  };

  const handleComplementoChangeWrapper = (e) => {
    HandleComplementoChange(e.target.value, handleChange);
  };

  const handleCidadeChangeWrapper = (e) => {
    handleCityChange(e.target.value, handleChange);
  };

  const handleStateSelectedChangeWrapper = (date) => {
    handleChange({
      target: {
        name: "estado",
        value: date,
      },
    });
  };

  return (
    <div className="center">
      <h5>Detalhes de entrega</h5>
      <br />
      <FormDataLocal
        formData={formData}
        handleChange={handleChange}
        handleStateSelectedChange={handleStateSelectedChangeWrapper}
        handleCEPChange={handleCEPChangeWrapper}
        handleAddressChange={handleAddressChangeWrapper}
        handleNumberChange={handleNumberChangeWrapper}
        handleComplementoChange={handleComplementoChangeWrapper}
        handleCidadeChange={handleCidadeChangeWrapper}
      />
      <br />
      <br />
      <br />
    </div>
  );
}

LocalDataInputs.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
