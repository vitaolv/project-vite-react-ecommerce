import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import PropTypes from "prop-types";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  activeStepIcon: {
    color: "#e3d98d",
  },
  completedStepIcon: {
    color: "#c5c5c5",
  },
});

export function StepperToPayment({ activeStep, steps }) {
  const classes = useStyles();

  return (
    <>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step) => (
          <Step key={step.title}>
            <StepLabel
              classes={{
                active: "active-step",
                completed: "completed-step",
              }}
              StepIconProps={{
                classes: {
                  active: classes.activeStepIcon,
                  completed: classes.completedStepIcon,
                },
              }}
            >
              {step.title}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div style={{ marginTop: "20px" }}>
        <h5>{steps[activeStep].title}</h5>
        <p>{steps[activeStep].content}</p>
      </div>
    </>
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
};
