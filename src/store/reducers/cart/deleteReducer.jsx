export function deleteReducer(state, action) {
  const itemIDToRemove = action.payload;
  const updatedCartItems = state.productInCart.filter(
    (item) => item.objID !== itemIDToRemove
  );

  return {
    ...state,
    productInCart: updatedCartItems,
  };
}
