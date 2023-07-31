import { useSelector, useDispatch } from "react-redux";
import { closeModalToClearCartAction } from "../../store/actions/ActionsModais";

import { clearCartAction } from "../../store/actions/ActionsCart";
import { Button } from "@mui/material";
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
                <div className="buttonsConfirmationContainer">
                  <Button
                    variant="outlined"
                    color="black"
                    onClick={handleClose}
                  >
                    Cancelar
                  </Button>
                  <Button variant="contained" onClick={handleConfirmToClear}>
                    Confirmar
                  </Button>
                </div>
              </Modal.Footer>
            </div>
          </Modal>
        </>
      )}
    </>
  );
}
