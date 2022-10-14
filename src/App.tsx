import { useState } from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { Header } from "./components";
import Signin from "./pages/Auth/components/Signin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App px-[9rem]">
      <Header />
      {/* <Homepage /> */}
      <Signin />
    </div>
  );
}

export default App;
