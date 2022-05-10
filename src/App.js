import Home from "./Home";
import Random from "./Random";
import Nav from "./Nav";
import Alert from "./Alert";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [error, setError] = useState("");
  const [randomClicked, setRandomClicked] = useState(false);

  return (
    <div className="App">
      <Nav randomClicked={randomClicked} setRandomClicked={setRandomClicked} cocktails={cocktails} setCocktails={setCocktails} />
      {error && <Alert error={error} setError={setError} />}
      <Routes>
        <Route path="/" element={<Home cocktails={cocktails} />} />
        <Route path="random" element={<Random setError={setError} randomClicked={randomClicked} />} />
      </Routes>
    </div>
  );
}

export default App;
