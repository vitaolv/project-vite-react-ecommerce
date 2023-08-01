import PersonalDataInputs from "../../components/Inputs/PersonalDataInputs";
import CardDataInputs from "../../components/Inputs/CardDataInputs";
import LocalDataInputs from "../../components/Inputs/LocalDataInputs";
import { Typography } from "antd";

const { Text } = Typography;

const getSteps = (formData, handleChange) => [
  {
    title: "Dados pessoais",
    content: (
      <PersonalDataInputs formData={formData} handleChange={handleChange} />
    ),
  },
  {
    title: "Endereço",
    content: (
      <LocalDataInputs formData={formData} handleChange={handleChange} />
    ),
  },
  {
    title: "Formas de pagamento",
    content: <CardDataInputs formData={formData} handleChange={handleChange} />,
  },
  {
    title: "Revisão da compra",
    content: (
      <div>
        <Text strong>Resumo da compra:</Text>
        <p>Nome: {formData.nome}</p>
        <p>CPF: {formData.cpf}</p>
        <p>E-mail: {formData.email}</p>
        <p>Telefone: {formData.telefone}</p>
        <p>CEP: {formData.cep}</p>
        {/* Adicione outros dados relevantes da compra aqui */}
      </div>
    ),
  },
  {
    title: "Finalização da compra",
    content: <CardDataInputs formData={formData} handleChange={handleChange} />,
  },
];

export default getSteps;
