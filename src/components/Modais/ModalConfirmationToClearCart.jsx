import { useSelector, useDispatch } from "react-redux";
import { closeModalToClearCartAction } from "../../store/actions/ActionsModais";

import { clearCartAction } from "../../store/actions/ActionsCart";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function ModalConfirmationToClearCart() {
  const isClearCartModalOpen = useSelector(
    (state) => state.modal.isClearCartModalOpen
  );

  const dispatch = useDispatch();

  const handleConfirmToClear = () => {
    dispatch(clearCartAction());
    handleClose();
  };

  const handleClose = () => {
    dispatch(closeModalToClearCartAction());
  };

  return (
    <>
      {isClearCartModalOpen && (
        <>
          <Modal
            show={isClearCartModalOpen}
            onHide={handleClose}
            animation={true}
          >
            <div id="modal-content">
              <Modal.Header closeButton>
                <Modal.Title>Confirmação</Modal.Title>
              </Modal.Header>
              <Modal.Body>Tem certeza que deseja limpar o carrinho?</Modal.Body>
              <Modal.Footer>
                <Button id="buttonToCancel" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button
                  id="buttonConfirmToRemove"
                  onClick={handleConfirmToClear}
                >
                  Confirmar
                </Button>
              </Modal.Footer>
            </div>
          </Modal>
        </>
      )}
    </>
  );
}
