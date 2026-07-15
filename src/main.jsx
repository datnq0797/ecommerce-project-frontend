import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.scss';
import { StrictMode } from "react";
import {AdminAuthProvider} from './components/context/AdminAuth.jsx';
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AdminAuthProvider>
      <App />
    </AdminAuthProvider>
  </StrictMode>
);