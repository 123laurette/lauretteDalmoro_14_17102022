import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import CreateEmployee from "./pages/createEmployee/CreateEmployee"
import CurrentEmployees from "./pages/currentEmployees/CurrentEmployees"
import Header from "./components/header/Header"

import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<CurrentEmployees />} />
      <Route path="/CreateEmployee" element={<CreateEmployee />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
