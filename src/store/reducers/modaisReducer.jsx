import * as types from "../Types";

const initialState = {
  isRemoveItemOpen: false,
  isClearCartModalOpen: false,
  isPaymentOpen: false,
  itemToRemove: null,
};

export function modaisReducer(state = initialState, action) {
  switch (action.type) {
    case types.OPEN_MODAL_TO_REMOVE_ITEM: {
      return {
        ...state,
        isRemoveItemOpen: true,
        itemToRemove: action.payload,
      };
    }

    case types.CLOSE_MODAL_TO_REMOVE_ITEM: {
      return {
        ...state,
        isRemoveItemOpen: false,
        itemToRemove: null,
      };
    }

    case types.OPEN_MODAL_TO_CLEAR_CART: {
      return {
        ...state,
        isClearCartModalOpen: true,
      };
    }

    case types.CLOSE_MODAL_TO_CLEAR_CART: {
      return {
        ...state,
        isClearCartModalOpen: false,
      };
    }

    case types.OPEN_MODAL_TO_PAYMENT: {
      return {
        ...state,
        isPaymentOpen: true,
      };
    }

    case types.CLOSE_MODAL_TO_PAYMENT: {
      return {
        ...state,
        isPaymentOpen: false,
      };
    }

    default:
      return state;
  }
}
