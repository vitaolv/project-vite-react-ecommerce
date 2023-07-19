export function setFlavorSelectedReducer(state, action) {
  const { productID, flavorSelected } = action;
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
