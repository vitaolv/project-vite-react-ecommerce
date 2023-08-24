import { Select } from "antd";
export function InstallmentOptionSelect() {
  return (
    <>
      <Select
        required
        name="opcoesDeParcelamento"
        size="middle"
        value={formData.opcoesDeParcelamento}
        onChange={handleStateSelectedChange}
      >
        {getBrazilianStates.map((state) => (
          <Select.Option key={state} value={state}>
            {state}
          </Select.Option>
        ))}
      </Select>
    </>
  );
}
