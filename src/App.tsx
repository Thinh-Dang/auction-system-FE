import { useState } from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { Navbar } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
