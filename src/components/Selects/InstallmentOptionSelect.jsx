import { Select } from "antd";
import { useSelector } from "react-redux";
import { useState } from "react";
import PropTypes from "prop-types";

import { getInstallmentOptions } from "../../utils/InstallmentOptions/getInstallmentOptions";

export function InstallmentOptionSelect({ formData, handleChange }) {
  const value = useSelector((state) => state.cart.priceTotal);
  const options = getInstallmentOptions(value);

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleCardInstallmentOptionChange = (value) => {
    setSelectedOption(value);
    handleChange({
      target: {
        name: "opcoesDeParcelamento",
        value: value,
      },
    });
  };

  if (!formData.opcoesDeParcelamento) {
    handleChange({
      target: {
        name: "opcoesDeParcelamento",
        value: options[0],
      },
    });
  }

  return (
    <>
      <Select
        required
        name="opcoesDeParcelamento"
        size="middle"
        value={selectedOption}
        onChange={handleCardInstallmentOptionChange}
      >
        {options.map((option) => (
          <Select.Option key={option} value={option}>
            {option}
          </Select.Option>
        ))}
      </Select>
    </>
  );
}

InstallmentOptionSelect.propTypes = {
  formData: PropTypes.shape({
    opcoesDeParcelamento: PropTypes.string.isRequired,
  }),
  handleChange: PropTypes.func.isRequired,
};
