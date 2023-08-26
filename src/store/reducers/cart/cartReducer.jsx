import * as types from "../../Types";
import { addReducer } from "./addReducer";
import { updateReducer } from "./updateReducer";
import { deleteReducer } from "./deleteReducer";
import { updatePriceTotalReducer } from "./finalPriceReducer";

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

    case types.REMOVE_FROM_CART: {
      return deleteReducer(state, action);
    }

    case types.UPDATE_PRICE_TOTAL: {
      return updatePriceTotalReducer(state);
    }

    case types.CLEAR_CART: {
      return {
        ...state,
        productInCart: [],
        quantityTotal: 0,
        priceTotal: 0,
      };
    }

    case types.RESET_ALL: {
      return {
        ...state,
        productInCart: [],
        quantityTotal: 0,
        priceTotal: 0,
      };
    }

    default:
      return state;
  }
}
