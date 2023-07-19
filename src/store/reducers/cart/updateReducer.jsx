export function updateReducer(state, action) {
  const { objID, quantity } = action.payload;
  const itemToUpdate = state.productInCart.find((item) => item.objID === objID);

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
