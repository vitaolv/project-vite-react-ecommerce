import { Steps } from "antd";
import PropTypes from "prop-types";

const { Step } = Steps;

export function StepperToPayment({ activeStep, steps }) {
  return (
    <Steps
      current={activeStep}
      size="small"
      progressDot
      className="custom-progress-dot"
    >
      {steps.map((step, index) => (
        <Step
          key={step.title}
          title={step.title}
          className={index <= activeStep ? "completed" : ""}
        />
      ))}
    </Steps>
  );
}

StepperToPayment.propTypes = {
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
