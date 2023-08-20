import { PersonalDataInputs } from "../../components/Inputs/PersonalDataInputs";
import { CardDataInputs } from "../../components/Inputs/CardDataInputs";
import { LocalDataInputs } from "../../components/Inputs/LocalDataInputs";

import { Teste } from "../../components/teste";

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
    content: <Teste formData={formData} handleChange={handleChange} />,
  },
  {
    title: "Finalização da compra",
  },
];

export default getSteps;
