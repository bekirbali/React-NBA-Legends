import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Body from "./components/Body/Body";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Body />
    </div>
  );
}

export default App;
