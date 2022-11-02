import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { Header } from "./components";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import { createBrowserRouter, Route, Routes } from "react-router-dom";
import APP_PATH from "./constant/APP_PATH";
import Forgot from "./pages/Auth/Forgot";
import Footer from "./components/Footer";
import Detail from "./pages/Detail/Detail";
import Collections from "./pages/Collections/Collections";

function App() {
   return (
      <div className="App md:px-[9rem] px-8">
         <Header />
         <Routes>
            <Route path={APP_PATH.ROOT.href} element={<Homepage />} />
            <Route path={APP_PATH.PRODUCTS.href} element={<Collections />} />
            <Route path={APP_PATH.SIGNIN.href} element={<Signin />} />
            <Route path={APP_PATH.SIGNUP.href} element={<Signup />} />
            <Route path={APP_PATH.FORGOTPASSWORD.href} element={<Forgot />} />
            <Route path={APP_PATH.DETAILPRODUCT.href} element={<Detail />} />
            <Route path="*" element={<Homepage />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
