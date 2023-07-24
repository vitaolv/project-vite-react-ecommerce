import { useSelector, useDispatch } from "react-redux";
import { closeModalToRemoveAction } from "../../store/actions/ActionsModais";
import { removeFromCartAction } from "../../store/actions/ActionsCart";
import { updateQuantityAction } from "../../store/actions/ActionsCart";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function ModalConfirmationToRemove() {
  const isRemoveItemOpen = useSelector((state) => state.modal.isRemoveItemOpen);
  const itemToRemove = useSelector((state) => state.modal.itemToRemove);
  const dispatch = useDispatch();

  const handleConfirmToRemove = () => {
    dispatch(updateQuantityAction(itemToRemove.objID, 0));
    dispatch(removeFromCartAction(itemToRemove.objID));
    handleClose();
  };

  const handleClose = () => {
    dispatch(closeModalToRemoveAction());
  };

  return (
    <>
      {isRemoveItemOpen && (
        <>
          <Modal show={isRemoveItemOpen} onHide={handleClose} animation={true}>
            <div id="modal-content">
              <Modal.Header closeButton>
                <Modal.Title>Confirmação</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Tem certeza que deseja deletar este produto:
                <br />
                <strong>
                  {itemToRemove.name} - sabor {itemToRemove.flavorSelected}
                </strong>
              </Modal.Body>
              <Modal.Footer>
                <Button id="buttonToCancel" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button
                  id="buttonConfirmToRemove"
                  onClick={handleConfirmToRemove}
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
