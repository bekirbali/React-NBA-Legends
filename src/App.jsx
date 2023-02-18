import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
