import { useState } from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { Header } from "./components";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import { createBrowserRouter, Route, Routes } from "react-router-dom";
import APP_PATH from "./constant/APP_PATH";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App px-[9rem]">
      <Header />
      <Routes>
        <Route path={APP_PATH.ROOT.href} element={<Homepage />} />
        <Route path={APP_PATH.SIGNIN.href} element={<Signin />} />
        <Route path={APP_PATH.SIGNUP.href} element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
