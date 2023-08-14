import { PersonalDataInputs } from "../../components/Inputs/PersonalDataInputs";
import { CardDataInputs } from "../../components/Inputs/CardDataInputs";
import { LocalDataInputs } from "../../components/Inputs/LocalDataInputs";

import { Teste } from "../../components/teste";

const getSteps = (formData, handleChange, setValidation) => [
  {
    title: "Dados pessoais",
    content: (
      <PersonalDataInputs
        formData={formData}
        handleChange={handleChange}
        setValidation={setValidation}
      />
    ),
  },
  {
    title: "Endereço",
    content: (
      <LocalDataInputs
        formData={formData}
        handleChange={handleChange}
        setValidation={setValidation}
      />
    ),
  },
  {
    title: "Formas de pagamento",
    content: (
      <CardDataInputs
        formData={formData}
        handleChange={handleChange}
        setValidation={setValidation}
      />
    ),
  },
  {
    title: "Revisão da compra",
    content: (
      <Teste
        formData={formData}
        handleChange={handleChange}
        setValidation={setValidation}
      />
    ),
  },
  {
    title: "Finalização da compra",
    content: (
      <PersonalDataInputs
        formData={formData}
        handleChange={handleChange}
        setValidation={setValidation}
      />
    ),
  },
];

export default getSteps;
