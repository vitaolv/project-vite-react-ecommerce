import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers/rootReducer";
import PropTypes from "prop-types";

const store = configureStore({ reducer: rootReducer });

export default function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
