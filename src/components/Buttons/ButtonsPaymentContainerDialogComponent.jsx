import { Button } from "@mui/material";
import PropTypes from "prop-types";

export function ButtonsPaymentContainerDialogComponent({
  handleClose,
  handleNextStep,
  handlePreviousStep,
  activeStep,
  steps,
}) {
  return (
    <div className="btn-container">
      <Button color="black" variant="outlined" onClick={handleClose}>
        Cancelar
      </Button>
      <div className="button-back-and-next">
        {activeStep > 0 && (
          <Button color="black" variant="outlined" onClick={handlePreviousStep}>
            Voltar
          </Button>
        )}
        {activeStep < steps.length - 1 ? (
          <Button
            className="buttonntainer"
            color="primary"
            variant="contained"
            onClick={handleNextStep}
          >
            Próximo
          </Button>
        ) : (
          <Button
            className="custom-button"
            color="primary"
            variant="contained"
            onClick={handleClose}
          >
            Finalizar Compra
          </Button>
        )}
      </div>
    </div>
  );
}

ButtonsPaymentContainerDialogComponent.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
  handlePreviousStep: PropTypes.func.isRequired,
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
};
