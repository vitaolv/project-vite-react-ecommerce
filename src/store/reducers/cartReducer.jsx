import * as types from "../Types";

const initialState = {
  productInCart: [],
  quantityTotal: 0,
  priceTotal: 0,
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_CART: {
      const { payload } = action;
      const { id, name, flavorSelected, quantity, price } = payload;

      const existingProductIndex = state.productInCart.findIndex(
        (item) =>
          item.id === id &&
          item.name === name &&
          item.flavorSelected === flavorSelected
      );

      if (existingProductIndex !== -1) {
        const updatedCart = state.productInCart.map((item, index) => {
          if (index === existingProductIndex) {
            return {
              ...item,
              quantity: quantity,
            };
          }
          return item;
        });

        return {
          ...state,
          productInCart: updatedCart,
          quantityTotal:
            state.quantityTotal +
            (quantity - state.productInCart[existingProductIndex].quantity),
          priceTotal:
            state.priceTotal +
            (price * quantity -
              state.productInCart[existingProductIndex].price *
                state.productInCart[existingProductIndex].quantity),
        };
      } else {
        return {
          ...state,
          productInCart: [...state.productInCart, payload],
          quantityTotal: state.quantityTotal + quantity,
          priceTotal: state.priceTotal + price * quantity,
        };
      }
    }

    case types.SET_FLAVOR_SELECTED: {
      const { productID, flavorSelected } = action.payload;
      const updatedCart = state.productInCart.map((item) => {
        if (item.id === productID) {
          return {
            ...item,
            flavorSelected: flavorSelected,
          };
        }
        return item;
      });
      return {
        ...state,
        productInCart: updatedCart,
      };
    }

    case types.UPDATE_CART_ITEM:
      return {
        ...state,
        productInCart: action.payload,
        quantityTotal: action.payload.reduce(
          (total, item) => total + item.quantity,
          0
        ),
        priceTotal: action.payload.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
      };

    case types.REMOVE_FROM_CART: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
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
