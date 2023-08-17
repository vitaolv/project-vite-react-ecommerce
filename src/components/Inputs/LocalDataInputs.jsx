import { Input, Form, Row, Col, Select } from "antd";

import { getBrazilianStates } from "../../utils/estadosBrasileiros/states";
import PropTypes from "prop-types";

export function LocalDataInputs({ formData, handleChange }) {
  const handleDateChange = (date) => {
    handleChange({
      target: {
        name: "estado",
        value: date,
      },
    });
  };
  return (
    <Form layout="vertical">
      <Row gutter={(16, 16)}>
        <Col md={12} xs={12}>
          <Form.Item label="CEP" required>
            <Input
              required
              name="cep"
              size="middle"
              value={formData.cep}
              onChange={handleChange}
            />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item label="Endereço" required>
            <Input
              required
              name="endereco"
              size="middle"
              value={formData.endereco}
              onChange={handleChange}
            />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item label="Número" required>
            <Input
              required
              name="numero"
              size="middle"
              value={formData.numero}
              onChange={handleChange}
            />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item label="Complemento" required>
            <Input
              name="complemento"
              size="middle"
              value={formData.complemento}
              onChange={handleChange}
            />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item label="Cidade" required>
            <Input
              required
              name="cidade"
              size="middle"
              value={formData.cidade}
              onChange={handleChange}
            />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item label="Estado" required>
            <Select
              required
              name="estado"
              size="middle"
              value={formData.estado}
              onChange={handleDateChange}
            >
              {getBrazilianStates.map((state) => (
                <Select.Option key={state} value={state}>
                  {state}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

LocalDataInputs.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
