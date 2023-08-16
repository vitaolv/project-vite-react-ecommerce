import Form from "antd/es/form/Form";
import { Row, Col, Input } from "antd";
import ReCAPTCHA from "react-google-recaptcha";

import PropTypes from "prop-types";

export function CardDataInputs({ formData, handleChange }) {
  return (
    <div>
      <h2>Formas de Pagamento</h2>

      <Form layout="vertical" onSubmit={handleChange}>
        <Row gutter={[16, 16]}>
          <Col md={12} xs={12}>
            <Form.Item label="Número de cartão" required>
              <Input
                required
                name="numeroDoCartao"
                value={formData.numeroDoCartao}
                onChange={handleChange}
                onFocus={(e) =>
                  handleChange({
                    target: { name: "focused", value: e.target.name },
                  })
                }
                placeholder="Número do cartão"
                style={{ width: "100%", maxWidth: "400px" }}
              />
            </Form.Item>
          </Col>
          <Col md={12} xs={12}>
            <Form.Item label="Nome escrito no cartão" required>
              <Input
                required
                type="text"
                name="nomeEscritoNoCartao"
                value={formData.nomeEscritoNoCartao}
                onChange={handleChange}
                placeholder="Nome escrito no cartão"
              />
            </Form.Item>
          </Col>
          <Col md={12} xs={12}>
            <Form.Item label="Data de vencimento" required>
              <Input
                required
                name="vencimento"
                value={formData.vencimento}
                onChange={handleChange}
                placeholder="Vencimento (MM/AA)"
              />
            </Form.Item>
          </Col>
          <Col md={12} xs={12}>
            <Form.Item label="CVV" required>
              <Input
                required
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="Código de segurança (CVV)"
                style={{ width: "100%", maxWidth: "100px" }}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <div style={{ margin: "2rem" }}>
        <ReCAPTCHA sitekey="SUA_CHAVE_PUBLICA_DO_RECAPTCHA" />
      </div>
    </div>
  );
}

CardDataInputs.propTypes = {
  formData: PropTypes.shape({
    numeroDoCartao: PropTypes.string.isRequired,
    nomeEscritoNoCartao: PropTypes.string.isRequired,
    vencimento: PropTypes.string.isRequired,
    cvv: PropTypes.string.isRequired,
    tipoDeCartao: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};
