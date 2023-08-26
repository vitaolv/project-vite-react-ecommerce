import { getBrazilianStates } from "../../utils/estadosBrasileiros/states";
import PropTypes from "prop-types";

import { Select } from "antd";
export function BrazilianStatesOptionSelect({
  formData,
  handleStateSelectedChange,
}) {
  return (
    <div className="left">
      <Select
        required
        name="estado"
        size="middle"
        value={formData.estado}
        onChange={handleStateSelectedChange}
      >
        {getBrazilianStates.map((state) => (
          <Select.Option key={state} value={state}>
            {state}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
}

BrazilianStatesOptionSelect.propTypes = {
  formData: PropTypes.object.isRequired,
  handleStateSelectedChange: PropTypes.func.isRequired,
};
