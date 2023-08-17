import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { closeModalToPaymentAction } from "../../store/actions/ActionsModais";
import getSteps from "../../utils/stepsDialog/steps";
import { StepperToPayment } from "../Stepper/StepperToPayment";

import { ButtonsPaymentContainerDialogComponent } from "../Buttons/ButtonsPaymentContainerDialogComponent";

export function ModalPayment() {
  const isPaymentOpen = useSelector((state) => state.modal.isPaymentOpen);
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    //Personal
    nome: "",
    dataNascimento: "",
    cpf: "",
    email: "",
    telefone: "",
    celular: "",
    //Local
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    cidade: "",
    estado: "",
    //Payment card
    numeroDoCartao: "",
    nomeEscritoNoCartao: "",
    vencimento: "",
    cvv: "",
    tipoDeCartao: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const steps = getSteps(formData, handleChange);

  const handleNextStep = () => {
    // Desativar temporariamente a validação para permitir avançar entre os passos
    // if (!validation) {
    //   return;
    // }
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
        <Modal
          open={isPaymentOpen}
          onClose={handleClose}
          closable={false}
          footer={null}
          centered
          width="md"
          title="Etapas de Finalização de Compra"
        >
          <StepperToPayment activeStep={activeStep} steps={steps} />

          {steps.map((step, index) => (
            <div
              key={index}
              style={{ display: activeStep === index ? "block" : "none" }}
            >
              {step.content}
            </div>
          ))}

          <ButtonsPaymentContainerDialogComponent
            handleClose={handleClose}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
            activeStep={activeStep}
            steps={steps}
          />
        </Modal>
      )}
    </>
  );
}
