import "/src/css/DialogPayment/stepper.css";

import { Steps } from "antd";
import PropTypes from "prop-types";

export function StepperToPayment({ activeStep, steps }) {
  return (
    <>
      <Steps
        current={activeStep}
        progressDot
        className="custom-progress-dot"
        items={steps.map((step) => ({
          title: step.title,
          content: step.content,
        }))}
      />

      <hr />
    </>
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
