import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { ContextProvider } from './contexts/ContextProvider';
ReactDOM.createRoot(document.getElementById("root")).render(
   <ContextProvider>
        <Provider store={store}>
            <App />
        </Provider>
   </ContextProvider>
);
