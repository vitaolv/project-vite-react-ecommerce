import * as types from "../Types";

const initialState = {
  isOpen: false,
  itemToRemove: null,
};

export function modaisReducer(state = initialState, action) {
  switch (action.type) {
    case types.OPEN_MODAL_TO_REMOVE_ITEM: {
      return {
        ...state,
        isOpen: true,
        itemToRemove: action.payload,
      };
    }

    case types.CLOSE_MODAL_TO_REMOVE_ITEM: {
      return {
        ...state,
        isOpen: false,
        itemToRemove: null,
      };
    }

    default:
      return state;
  }
}
