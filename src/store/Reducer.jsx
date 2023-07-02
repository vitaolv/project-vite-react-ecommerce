import * as types from "./Types";

const initialState = {
  productInCart: [],
};

export function Reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_CART: {
      const newItem = {
        ...action.payload,
        quantity: action.payload.quantity, // Usar a quantidade selecionada pelo usuário
      };
      return {
        ...state,
        productInCart: [...state.productInCart, newItem],
      };
    }

    case types.REMOVE_FROM_CART:
      return {
        ...state,
        productInCart: state.productInCart.filter(
          (product) => product.id !== action.payload
        ),
      };

    default:
      return state;
  }
}
