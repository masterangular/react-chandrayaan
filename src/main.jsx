import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
  <TransactionsProvider>
  <React.StrictMode>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </React.StrictMode>
  </TransactionsProvider>,
  document.getElementById("root"),
);