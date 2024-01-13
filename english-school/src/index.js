import React from "react";
import store from "./redux/redux-store"
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

// let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
       <Provider store={store}>
      <App/>
      </Provider>
    </React.StrictMode>
  );
// };

// rerenderEntireTree(store.getState());












reportWebVitals();
