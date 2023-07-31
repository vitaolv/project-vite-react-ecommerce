import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import { ButtonsPaymentContainerDialogComponent } from "../Buttons/ButtonsPaymentContainerDialogComponent";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { closeModalToPaymentAction } from "../../store/actions/ActionsModais";
import getSteps from "../../utils/stepsDialog/steps";
import { StepperToPayment } from "../Stepper/StepperToPayment";

export function ModalPayment() {
  const isPaymentOpen = useSelector((state) => state.modal.isPaymentOpen);
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    nome: "",
    dataNascimento: "",
    cpf: "",
    email: "",
    telefone: "",
    celular: "",

    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    cidade: "",
    estado: "",
  });

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleClose = () => {
    dispatch(closeModalToPaymentAction());
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const steps = getSteps(formData, handleChange);

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
          PaperProps={{
            style: {
              minHeight: "80vh",
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          <DialogTitle>Etapas de Finalização de Compra</DialogTitle>
          <DialogContent>
            <StepperToPayment
              activeStep={activeStep}
              steps={steps}
              formData={formData}
              handleChange={handleChange}
            />
          </DialogContent>
          <DialogActions className="custom-dialog-actions">
            <ButtonsPaymentContainerDialogComponent
              handleClose={handleClose}
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
              activeStep={activeStep}
              steps={steps}
            />
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
