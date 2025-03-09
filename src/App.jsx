import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import '@ant-design/v5-patch-for-react-19';
import Profile from "./components/Profile";
import Header from "./components/Header";
import MainHeader from "./components/MainHeader";
import Corusel from "./components/Corusel";


function Layout() {
  const location = useLocation();
  const hideHeader = location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      {!hideHeader && <Header />}
      {!hideHeader && <MainHeader />}
        <Corusel/>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
