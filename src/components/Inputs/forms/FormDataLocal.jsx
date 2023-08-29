import { Input, Form, Row, Col } from "antd";
import PropTypes from "prop-types";

import { BrazilianStatesOptionSelect } from "../../Selects/BrazilianStatesOptionSelect";

export function FormDataLocal({
  formData,
  handleStateSelectedChange,
  handleCEPChange,
  handleAddressChange,
  handleNumberChange,
  handleComplementoChange,
  handleCidadeChange,
}) {
  const CepMaskPlaceHolder = "_____-___";

  return (
    <Form layout="vertical">
      <br />
      <Row gutter={(18, 18)}>
        <Col md={12} xs={22}>
          <Form.Item label="CEP" required>
            <Input
              required
              name="cep"
              size="middle"
              value={formData.cep}
              placeholder={CepMaskPlaceHolder}
              onChange={handleCEPChange}
            />
          </Form.Item>
        </Col>
        <Col md={12} xs={22}>
          <Form.Item label="Endereço" required>
            <Input
              required
              name="endereco"
              size="middle"
              placeholder="Nome de endereço"
              value={formData.endereco}
              onChange={handleAddressChange}
            />
          </Form.Item>
        </Col>
        <Col md={12} xs={22}>
          <Form.Item label="Número" required>
            <Input
              required
              name="numero"
              size="middle"
              placeholder="Número do local"
              value={formData.numero}
              onChange={handleNumberChange}
            />
          </Form.Item>
        </Col>
        <Col md={12} xs={22}>
          <Form.Item label="Complemento (OPCIONAL)">
            <Input
              name="complemento"
              size="middle"
              placeholder="Ex: Apartamento 302, Bloco A, Sala 302, Fundos..."
              value={formData.complemento}
              onChange={handleComplementoChange}
            />
          </Form.Item>
        </Col>
        <Col md={12} xs={22}>
          <Form.Item label="Cidade" required>
            <Input
              required
              name="cidade"
              size="middle"
              placeholder="Sua cidade, exemplo: São Paulo."
              value={formData.cidade}
              onChange={handleCidadeChange}
            />
          </Form.Item>
        </Col>
        <Col md={12} xs={22}>
          <Form.Item label="Estado" required>
            <BrazilianStatesOptionSelect
              formData={formData}
              handleStateSelectedChange={handleStateSelectedChange}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

FormDataLocal.propTypes = {
  formData: PropTypes.shape({
    cep: PropTypes.string.isRequired,
    endereco: PropTypes.string.isRequired,
    numero: PropTypes.string.isRequired,
    complemento: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
  }).isRequired,
  handleCEPChange: PropTypes.func.isRequired,
  handleAddressChange: PropTypes.func.isRequired,
  handleNumberChange: PropTypes.func.isRequired,
  handleComplementoChange: PropTypes.func.isRequired,
  handleCidadeChange: PropTypes.func.isRequired,
  handleStateSelectedChange: PropTypes.func.isRequired,
};
