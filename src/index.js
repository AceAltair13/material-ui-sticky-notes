import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import rootReducer from "./Features/rootSlice";
import { configureStore } from "@reduxjs/toolkit";
import { SnackbarProvider } from "notistack";

const store = configureStore({
    reducer: rootReducer,
});

ReactDOM.render(
    <Provider store={store}>
        <SnackbarProvider>
            <App />
        </SnackbarProvider>
    </Provider>,
    document.getElementById("root")
);
