import React from "react";
import Home from "./components/Pages/Home";
import { Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import AboutUs from "./components/Pages/AboutUs";
import Services from "./components/Pages/Services";
import "./App.css";
import { Contact } from "./components/Pages/Contact";
import Register from "./components/registration/Register";
import Login from "./components/registration/Login";
import ProtectedRoutes from "./components/registration/ProtectedRoutes";
import More from "./components/Pages/More";
import Cryptos from "./components/Pages/Cryptos";
import BurgerMenu from "./components/BurgerMenu";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/more" element={<More />} />
        <Route path="/burger" element={<BurgerMenu />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/crypto" element={<Cryptos />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
