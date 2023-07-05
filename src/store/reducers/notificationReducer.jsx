import * as types from "../Types";

const initialState = {
  message: "",
  variant: "",
  isVisible: false,
};

export function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_NOTIFICATION:
      return {
        ...state,
        message: action.payload.message,
        variant: action.payload.variant,
        isVisible: true,
      };

    case types.HIDE_NOTIFICATION:
      return {
        ...state,
        isVisible: false,
      };

    default:
      return state;
  }
}
