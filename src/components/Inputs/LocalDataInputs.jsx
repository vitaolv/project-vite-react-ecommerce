import { Input, Grid, Select } from "antd";
import { getBrazilianStates } from "../../utils/estadosBrasileiros/states";
import PropTypes from "prop-types";
export default function LocalDataInputs({ formData, handleChange }) {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input
            required
            name="cep"
            addonBefore="CEP"
            size="middle"
            value={formData.cep}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            required
            name="endereco"
            addonBefore="Endereço"
            size="large"
            value={formData.endereco}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            required
            name="numero"
            addonBefore="Número"
            size="middle"
            value={formData.numero}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            name="complemento"
            addonBefore="Complemento"
            size="middle"
            value={formData.complemento}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            required
            name="cidade"
            addonBefore="Cidade"
            size="middle"
            value={formData.cidade}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Select
            required
            name="estado"
            addonBefore="Estado"
            size="middle"
            value={formData.estado}
            onChange={handleChange}
          >
            {getBrazilianStates.map((state) => (
              <Select.Option key={state} value={state}>
                {state}
              </Select.Option>
            ))}
          </Select>
        </Grid>
      </Grid>
    </div>
  );
}

LocalDataInputs.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
