export function deleteReducer(state, action) {
  return {
    ...state,
    items: state.items.filter((item) => item.id !== action.payload),
  };
}
