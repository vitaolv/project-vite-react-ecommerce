import * as types from "../../Types";

export function formReducer(state, action) {
  switch (action.type) {
    case types.UPDATE_FIELD:
      return { ...state, [action.field]: action.value };

    default:
      return state;
  }
}
