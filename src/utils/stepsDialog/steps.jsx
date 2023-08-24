import { PersonalDataInputs } from "../../components/Inputs/PersonalDataInputs";
import { CardDataInputs } from "../../components/Inputs/CardDataInputs";
import { LocalDataInputs } from "../../components/Inputs/LocalDataInputs";
import { RecipientDataReviewToPaymentModal } from "../../components/Table/RecipientDataReviewToPaymentModal";

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
    title: "Revisão do pedido",
    content: <RecipientDataReviewToPaymentModal formData={formData} />,
  },
  {
    title: "Finalização da compra",
  },
];

export default getSteps;
