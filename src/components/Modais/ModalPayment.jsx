import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { closeModalToPaymentAction } from "../../store/actions/ActionsModais";
import { StepperToPayment } from "../Stepper/StepperToPayment";

import { steps } from "../../utils/stepsDialog/steps";

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
          <DialogActions>
            <Button onClick={handleClose} variant="outlined" color="warning">
              Cancelar
            </Button>
            {activeStep > 0 && (
              <Button onClick={handlePreviousStep} className="DialogBackButton">
                Voltar
              </Button>
            )}
            {activeStep < steps.length - 1 ? (
              <Button onClick={handleNextStep} className="DialogNextButton">
                Próximo
              </Button>
            ) : (
              <Button onClick={handleClose} className="DialogFinishButton">
                Finalizar Compra
              </Button>
            )}
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
