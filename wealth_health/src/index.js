import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import {Provider} from "react-redux"
import store from "./redux/store"
import CreateEmployee from "./pages/createEmployee/CreateEmployee"
import CurrentEmployees from "./pages/currentEmployees/CurrentEmployees"
import Header from "./components/header/Header"
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<CurrentEmployees />} />
        <Route path="/CreateEmployee" element={<CreateEmployee />} />
      </Routes>

    </BrowserRouter>

  </Provider>
);


