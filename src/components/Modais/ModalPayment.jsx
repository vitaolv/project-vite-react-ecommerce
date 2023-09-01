import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { closeModalToPaymentAction } from "../../store/actions/ActionsModais";
import getSteps from "../../utils/stepsDialog/steps";
import { StepperToPayment } from "../Stepper/StepperToPayment";
import { ResultPayment } from "../../components/Result/ResultPayment";
import initialFormData from "../../utils/datasForPayment/initialFormData";
import { showNotification } from "../../store/actions/ActionsNotification";

import { resetCart } from "../../store/actions/ActionsCart";

import { ButtonsPaymentContainerDialogComponent } from "../Buttons/ButtonsPaymentContainerDialogComponent";

import "/src/css/DialogPayment/RecipientDataReview.css";
import "/src/css/DialogPayment/Pagination.css";

export function ModalPayment() {
  const isPaymentOpen = useSelector((state) => state.modal.isPaymentOpen);
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetAll = () => {
    setActiveStep(0);
    setFormData(initialFormData);
  };

  const steps = getSteps(formData, handleChange);

  const handleNextStep = async () => {
    // Aqui a validação para permitir avançar entre os passos
    // if (!validation) {
    //   return;
    // }
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleClose = () => {
    resetAll();
    dispatch(closeModalToPaymentAction());
  };

  const handlePurchaseMadeAndClose = () => {
    dispatch(resetCart());
    dispatch(showNotification("A compra foi realizada!", "success"));
    handleClose();
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
          width="840px"
          height="600px"
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

          {activeStep === steps.length - 1 ? (
            <div className="center">
              <ResultPayment
                handlePurchaseMadeAndClose={handlePurchaseMadeAndClose}
                email={formData.email}
              />
            </div>
          ) : (
            <ButtonsPaymentContainerDialogComponent
              handleClose={handleClose}
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
              activeStep={activeStep}
              steps={steps}
            />
          )}
        </Modal>
      )}
    </>
  );
}
