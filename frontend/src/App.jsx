import { useEffect, useState } from "react";
import "./styles/index.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import currentUserContext from "./CurrentUserContext/context";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main/MainApp";
import Popup from "./components/Main/Components/Popup/Popup";
import api from "./utils/Api.js";
import SignInForm from "./components/Main/Components/SignInForm";
import NavBar from "./components/Main/Components/NavBar/NavBar";
import Login from "./components/Main/Components/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import MainApp from "./components/Main/MainApp";
function App() {
  //prueba de git
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>

        <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/main"
            element={
              <ProtectedRoute>
                <MainApp />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
