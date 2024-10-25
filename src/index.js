import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store, { persist } from "./redux/store";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
