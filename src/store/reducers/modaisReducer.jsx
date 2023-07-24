import * as types from "../Types";

const initialState = {
  isRemoveItemOpen: false,
  isClearCartModalOpen: false,
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

    default:
      return state;
  }
}
