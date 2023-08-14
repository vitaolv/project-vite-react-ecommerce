import { Input, Form, Row, Col, DatePicker } from "antd";
import { useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

export function PersonalDataInputs({ formData, handleChange, setValidation }) {
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

  const [cpf, setCPF] = useState("");
  const cpfMaskPlaceholder = "___.___.___-__";

  const handleCPFChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, "");
    let formattedValue = "";

    for (let i = 0; i < numericValue.length && i < 11; i++) {
      if (i === 3 || i === 6) {
        formattedValue += ".";
      } else if (i === 9) {
        formattedValue += "-";
      }
      formattedValue += numericValue[i];
    }

    setCPF(formattedValue);
    handleChange({
      target: {
        name: "cpf",
        value: formattedValue,
      },
    });
  };

  const [telefone, setTelefone] = useState("");

  const telephoneAndPhoneMaskPlaceholder = "(__) _____-____";
  const handleTelephone = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, "");
    let formattedValue = "";

    for (let i = 0; i < numericValue.length && i < 11; i++) {
      if (i === 0) {
        formattedValue += "(";
      }
      if (i === 2) {
        formattedValue += ")";
        formattedValue += " ";
      }
      if (i === 7) {
        formattedValue += "-";
      }
      formattedValue += numericValue[i];
    }

    setTelefone(formattedValue);
    handleChange({
      target: {
        name: "telefone",
        value: formattedValue,
      },
    });
  };

  const [phone, setPhone] = useState("");

  const handlePhone = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, "");
    let formattedValue = "";

    for (let i = 0; i < numericValue.length && i < 11; i++) {
      if (i === 0) {
        formattedValue += "(";
      }
      if (i === 2) {
        formattedValue += ")";
        formattedValue += " ";
      }
      if (i === 7) {
        formattedValue += "-";
      }
      formattedValue += numericValue[i];
    }

    setPhone(formattedValue);
    handleChange({
      target: {
        name: "celular",
        value: formattedValue,
      },
    });
  };

  const namePlaceHolder = "Seu nome";
  const handleNameChange = (e) => {
    let formattedValue = "";
    const inputValue = e.target.value;
    const alphabetcValue = inputValue.replace(/[^a-zA-ZÀ-ÿ\s'-]/g, "");

    if (alphabetcValue.length > 256) {
      formattedValue = alphabetcValue.substring(0, 256);
    } else {
      formattedValue = alphabetcValue;
    }

    console.log(alphabetcValue.length);
    console.log(formattedValue.length);

    handleChange({
      target: {
        name: "nome",
        value: formattedValue,
      },
    });
  };

  const emailPlaceHolder = "Seu E-mail";
  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    const maxEmailLength = 320;

    const limitedEmail = inputValue.substring(0, maxEmailLength);
    console.log(limitedEmail.length);
    handleChange({
      target: { name: "email", value: limitedEmail },
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
                placeholder={namePlaceHolder}
                onChange={handleNameChange}
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
                placeholder="DD/MM/AAAA"
                inputReadOnly
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
                onChange={handleCPFChange}
                placeholder={cpfMaskPlaceholder}
                maxLength={cpfMaskPlaceholder.length}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="E-mail" required>
              <Input
                name="email"
                size="middle"
                type="email"
                style={{ width: "100%" }}
                value={formData.email}
                placeholder={emailPlaceHolder}
                onChange={handleEmailChange}
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
                onChange={handleTelephone}
                placeholder={telephoneAndPhoneMaskPlaceholder}
                maxLength={telephoneAndPhoneMaskPlaceholder.length}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Celular (OPCIONAL)">
              <Input
                name="celular"
                size="middle"
                style={{ width: "100%" }}
                placeholder={telephoneAndPhoneMaskPlaceholder}
                value={formData.celular}
                onChange={handlePhone}
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
  setValidation: PropTypes.func.isRequired,
};
