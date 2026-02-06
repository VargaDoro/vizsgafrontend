/*import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./services/App";
import { AuthProvider } from "./contexts/AuthContext"; 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
*/


import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "../../frontend/src/contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
/*  <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter> */