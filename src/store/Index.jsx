import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { Reducer } from "./Reducer";
import PropTypes from "prop-types";

const store = configureStore({ reducer: Reducer });

export default function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
