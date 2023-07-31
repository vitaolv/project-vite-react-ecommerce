import PersonalDataInputs from "../../components/Inputs/PersonalDataInputs";
import CardDataInputs from "../../components/Inputs/CardDataInputs";
import LocalDataInputs from "../../components/Inputs/LocalDataInputs";

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
    content: <CardDataInputs formData={formData} handleChange={handleChange} />,
  },
  {
    title: "Finalização da compra",
    content: <CardDataInputs formData={formData} handleChange={handleChange} />,
  },
];

export default getSteps;
