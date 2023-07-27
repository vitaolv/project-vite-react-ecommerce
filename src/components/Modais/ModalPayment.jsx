import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { closeModalToPaymentAction } from "../../store/actions/ActionsModais";
import { steps } from "../../utils/stepsDialog/steps";
import { StepperToPayment } from "../Stepper/StepperToPayment";

export function ModalPayment() {
  const isPaymentOpen = useSelector((state) => state.modal.isPaymentOpen);
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleClose = () => {
    dispatch(closeModalToPaymentAction());
  };

  return (
    <>
      {isPaymentOpen && (
        <Dialog
          open={isPaymentOpen}
          fullWidth
          maxWidth="md"
          onClose={(event, reason) => {
            if (reason !== "backdropClick") {
              handleClose(event);
            }
          }}
        >
          <DialogTitle>Etapas de Finalização de Compra</DialogTitle>
          <DialogContent>
            <StepperToPayment activeStep={activeStep} steps={steps} />
          </DialogContent>
          <DialogActions className="custom-dialog-actions">
            <div className="btn-container">
              <button
                className="custom-button button-cancel-dialog"
                onClick={handleClose}
              >
                Cancelar
              </button>
              <div className="button-back-and-next">
                {activeStep > 0 && (
                  <button
                    className="custom-button btn-back"
                    onClick={handlePreviousStep}
                  >
                    Voltar
                  </button>
                )}
                {activeStep < steps.length - 1 ? (
                  <button
                    className="custom-button btn-next"
                    onClick={handleNextStep}
                  >
                    Próximo
                  </button>
                ) : (
                  <button
                    className="custom-button btn-final"
                    onClick={handleClose}
                  >
                    Finalizar Compra
                  </button>
                )}
              </div>
            </div>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
