import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createClient, Provider } from "urql";

const client = createClient({
  url: "https://api.github.com/graphql",
  fetchOptions: {
    headers: {
      Authorization: "Bearer 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",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
