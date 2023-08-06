import { Text } from "lucide-react";
import PropTypes from "prop-types";

export function Teste({ formData, handleChange }) {
  return (
    <>
      <Text strong={formData.toString()}>Resumo da compra:</Text>
      <p>Nome: {formData.nome}</p>
      <p>CPF: {formData.cpf}</p>
      <p>E-mail: {formData.email}</p>
      <p>Telefone: {formData.telefone}</p>
      <p>Celular: {formData.celular}</p>
    </>
  );
}

Teste.propTypes = {
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
