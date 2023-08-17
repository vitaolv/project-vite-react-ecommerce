import { Button } from "antd";
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
      <Button id="btn-cancel-payment" onClick={handleClose}>
        Cancelar
      </Button>
      <div className="button-back-and-next">
        {activeStep > 0 && (
          <Button id="btn-back-payment" onClick={handlePreviousStep}>
            Voltar
          </Button>
        )}
        {activeStep < steps.length - 1 ? (
          <Button id="btn-next-payment" onClick={handleNextStep}>
            Próximo
          </Button>
        ) : (
          <Button id="btn-finalize-payment" onClick={handleClose}>
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
