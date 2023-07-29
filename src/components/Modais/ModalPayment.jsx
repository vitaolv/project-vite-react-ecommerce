import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Button } from "@mui/material";

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
              <Button
                color="secondary"
                variant="contained"
                onClick={handleClose}
              >
                Cancelar
              </Button>
              <div className="button-back-and-next">
                {activeStep > 0 && (
                  <Button
                    color="black"
                    variant="outlined"
                    onClick={handlePreviousStep}
                  >
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
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
