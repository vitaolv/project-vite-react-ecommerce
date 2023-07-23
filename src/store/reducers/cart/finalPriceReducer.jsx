export function updatePriceTotalReducer(state) {
  let totalPrice = 0;
  state.productInCart.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  return {
    ...state,
    priceTotal: totalPrice,
  };
}
