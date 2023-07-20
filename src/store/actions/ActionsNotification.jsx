import * as types from "../Types";

export function showNotification(message, variant) {
  return {
    type: types.SHOW_NOTIFICATION,
    payload: { message, variant },
  };
}

export function hideNotification() {
  return {
    type: types.HIDE_NOTIFICATION,
  };
}
