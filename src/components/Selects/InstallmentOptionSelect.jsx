import { Select } from "antd";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { getInstallmentOptions } from "../../utils/InstallmentOptions/getInstallmentOptions";

export function InstallmentOptionSelect({ formData, handleChange }) {
  const value = useSelector((state) => state.cart.priceTotal);

  const handleCardInstallmentOptionChange = (e) => {
    handleChange({
      target: {
        name: "opcoesDeParcelamento",
        value: e,
      },
    });
  };
  return (
    <>
      <Select
        required
        name="opcoesDeParcelamento"
        size="middle"
        value={formData.opcoesDeParcelamento}
        onChange={handleCardInstallmentOptionChange}
      >
        {getInstallmentOptions(value).map((option) => (
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
