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

      const existingProduct = state.productInCart.find(
        (item) =>
          item.id === id &&
          item.name === name &&
          item.flavorSelected === flavorSelected
      );

      if (existingProduct) {
        const updatedCart = state.productInCart.map((item) => {
          if (
            item.id === id &&
            item.name === name &&
            item.flavorSelected === flavorSelected
          ) {
            return {
              ...item,
              quantity: quantity, // Atualizar para a nova quantidade selecionada
            };
          }
          return item;
        });

        return {
          ...state,
          productInCart: updatedCart,
          quantityTotal:
            state.quantityTotal + (quantity - existingProduct.quantity), // Subtrair a quantidade anteriormente selecionada e adicionar a nova quantidade
          priceTotal:
            state.priceTotal +
            (price * quantity -
              existingProduct.price * existingProduct.quantity), // Subtrair o preço anteriormente selecionado e adicionar o preço da nova quantidade
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

    case types.UPDATE_QUANTITY: {
      const { objID, quantity } = action.payload;
      const itemToUpdate = state.productInCart.find(
        (item) => item.objID === objID
      );

      if (!itemToUpdate) {
        return state;
      }

      const quantityDifference = quantity - itemToUpdate.quantity;

      return {
        ...state,
        productInCart: state.productInCart.map((item) => {
          if (item.objID === objID) {
            return {
              ...item,
              quantity: quantity,
            };
          }
          return item;
        }),
        quantityTotal: state.quantityTotal + quantityDifference,
      };
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
