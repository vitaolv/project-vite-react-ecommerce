import { Input, Form, Row, Col, DatePicker } from "antd";
import PropTypes from "prop-types";

import dayjs from "dayjs";

export function PersonalDataInputs({ formData, handleChange }) {
  const dateFormat = "DD/MM/YYYY";
  const handleDateChange = (date, dateString) => {
    const formattedDate = dayjs(dateString, dateFormat).format(dateFormat);
    handleChange({
      target: {
        name: "dataNascimento",
        value: formattedDate,
      },
    });
  };
  return (
    <>
      <Form layout="vertical">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Form.Item label="Nome completo" required>
              <Input
                name="nome"
                size="middle"
                style={{ width: "100%" }}
                value={formData.nome}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Data de Nascimento" required>
              <DatePicker
                name="dataNascimento"
                size="middle"
                style={{ width: "100%" }}
                format={dateFormat}
                value={
                  formData.dataNascimento
                    ? dayjs(formData.dataNascimento, dateFormat)
                    : null
                }
                onChange={handleDateChange}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="CPF" required>
              <Input
                name="cpf"
                size="middle"
                style={{ width: "100%" }}
                value={formData.cpf}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="E-mail" required>
              <Input
                name="email"
                size="middle"
                style={{ width: "100%" }}
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Telefone" required>
              <Input
                name="telefone"
                size="middle"
                style={{ width: "100%" }}
                value={formData.telefone}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Celular (OPCIONAL)">
              <Input
                name="celular"
                size="middle"
                style={{ width: "100%" }}
                value={formData.celular}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}

PersonalDataInputs.propTypes = {
  formData: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    dataNascimento: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telefone: PropTypes.string.isRequired,
    celular: PropTypes.string, // OPCIONAL
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};
