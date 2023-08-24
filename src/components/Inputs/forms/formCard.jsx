import PropTypes from "prop-types";
import Form from "antd/es/form/Form";
import { Row, Col, Input } from "antd";

export function FormCard({
  formData,
  handleChange,
  handleCardNameChangeWrapper,
  handleCardNumberChangeWrapper,
  handleCardExpirationChangeWrapper,
  handleCardCVVChangeWrapper,
}) {
  const cardMaskPlaceholder = "XXXX.XXXX.XXXX.XXXX";
  return (
    <Form layout="vertical" onSubmit={handleChange}>
      <Row gutter={[16, 16]}>
        <Col md={12} xs={12}>
          <Form.Item label="Número de cartão" required>
            <Input
              required
              name="numeroDoCartao"
              value={formData.numeroDoCartao}
              onChange={handleCardNumberChangeWrapper}
              placeholder={cardMaskPlaceholder}
              style={{ width: "100%", maxWidth: "400px" }}
              onFocus={(e) =>
                handleChange({
                  target: { name: "focused", value: e.target.name },
                })
              }
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
              onChange={handleCardNameChangeWrapper}
              placeholder="Nome escrito como consta no cartão"
            />
          </Form.Item>
        </Col>
        <Col md={12} xs={12}>
          <Form.Item label="Data de vencimento" required>
            <Input
              required
              name="vencimento"
              value={formData.vencimento}
              onChange={handleCardExpirationChangeWrapper}
              placeholder="MM/AA"
            />
          </Form.Item>
        </Col>
        <Col md={12} xs={12}>
          <Form.Item label="CVV" required>
            <Input
              required
              name="cvv"
              value={formData.cvv}
              onChange={handleCardCVVChangeWrapper}
              placeholder="XXX"
              style={{ width: "100%", maxWidth: "100px" }}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

FormCard.propTypes = {
  formData: PropTypes.shape({
    numeroDoCartao: PropTypes.string.isRequired,
    nomeEscritoNoCartao: PropTypes.string.isRequired,
    vencimento: PropTypes.string.isRequired,
    complemento: PropTypes.string.isRequired,
    cvv: PropTypes.string.isRequired,
    opcoesDeParcelamento: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCardNameChangeWrapper: PropTypes.func.isRequired,
  handleCardNumberChangeWrapper: PropTypes.func.isRequired,
  handleCardExpirationChangeWrapper: PropTypes.func.isRequired,
  handleCardCVVChangeWrapper: PropTypes.func.isRequired,
};
