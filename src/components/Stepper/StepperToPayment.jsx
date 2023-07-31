import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import PropTypes from "prop-types";

export function StepperToPayment({ activeStep, steps }) {
  return (
    <div style={{ textAlign: "center" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step) => (
          <Step key={step.title}>
            <StepLabel style={{ textAlign: "center" }}>{step.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div style={{ marginTop: "40px" }}>
        <h5>{steps[activeStep].title}</h5>
        <p>{steps[activeStep].content}</p>
      </div>
    </div>
  );
}

StepperToPayment.propTypes = {
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  formData: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    dataNascimento: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telefone: PropTypes.string.isRequired,
    celular: PropTypes.string.isRequired,
    cep: PropTypes.string.isRequired,
    endereco: PropTypes.string.isRequired,
    numero: PropTypes.string.isRequired,
    complemento: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
  }).isRequired,
};
