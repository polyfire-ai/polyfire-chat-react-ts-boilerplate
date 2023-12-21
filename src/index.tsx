import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Chat from "@polyfire-ai/chat-ui";

import reportWebVitals from "./reportWebVitals";
import { PolyfireProvider } from "polyfire-js/hooks";

import "./App.css";

import "@polyfire-ai/chat-ui/styles.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <PolyfireProvider project={process.env.REACT_APP_POLYFIRE_PROJECT as string}>
    <Chat.Root baseChatColor="#4682B4">
      <App />
    </Chat.Root>
  </PolyfireProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
