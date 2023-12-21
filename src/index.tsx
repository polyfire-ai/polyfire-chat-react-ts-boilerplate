import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PolyfireProvider } from "polyfire-js/hooks";

import "./App.css";

import "@polyfire-ai/chat-ui/styles.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <PolyfireProvider project={process.env.REACT_APP_PROJECT_ALIAS as string}>
    <App />
  </PolyfireProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
