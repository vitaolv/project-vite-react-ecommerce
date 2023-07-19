export function updatePriceTotalReducer(state, action) {
  return {
    ...state,
    priceTotal: action.payload,
  };
}
