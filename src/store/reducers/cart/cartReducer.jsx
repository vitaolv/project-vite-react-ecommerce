import * as types from "../../Types";
import { addReducer } from "./addReducer";
import { updateReducer } from "./updateReducer";
import { deleteReducer } from "./deleteReducer";
import { setFlavorSelectedReducer } from "./setFlavorSelectedReducer";

const initialState = {
  productInCart: [],
  quantityTotal: 0,
  priceTotal: 0,
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_CART: {
      return addReducer(state, action.payload);
    }

    case types.UPDATE_QUANTITY: {
      return updateReducer(state, action);
    }

    case types.SET_FLAVOR_SELECTED: {
      return setFlavorSelectedReducer(state, action);
    }

    case types.REMOVE_FROM_CART: {
      return deleteReducer(state, action);
    }

    case types.CLEAR_CART: {
      return {
        ...state,
        items: [],
      };
    }

    default:
      return state;
  }
}
