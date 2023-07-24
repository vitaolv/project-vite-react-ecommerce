import * as types from "../Types";

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

export function openModalToRemoveAction(item) {
  return {
    type: types.OPEN_MODAL_TO_REMOVE_ITEM,
    payload: item,
  };
}

export function closeModalToRemoveAction() {
  return async (dispatch) => {
    await sleep(500);
    dispatch({
      type: types.CLOSE_MODAL_TO_REMOVE_ITEM,
    });
  };
}

export function openModalToClearCartAction() {
  return async (dispatch) => {
    await sleep(500);
    dispatch({
      type: types.OPEN_MODAL_TO_CLEAR_CART,
    });
  };
}

export function closeModalToClearCartAction() {
  return {
    type: types.CLOSE_MODAL_TO_CLEAR_CART,
  };
}

export function openModalToPaymentAction() {
  return {
    type: types.OPEN_MODAL_TO_PAYMENT,
  };
}

export function closeModalToPaymentAction() {
  return {
    type: types.CLOSE_MODAL_TO_PAYMENT,
  };
}
