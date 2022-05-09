import Home from "./Home";
import Random from "./Random";
import Nav from "./Nav";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [errors, setErrors] = useState([]);
  const [randomClicked, setRandomClicked] = useState(false);

  return (
    <div className="App">
      <Nav randomClicked={randomClicked} setRandomClicked={setRandomClicked} cocktails={cocktails} setCocktails={setCocktails} /> 
      <Routes>
        <Route path="/" element={<Home cocktails={cocktails} />} />
        <Route path="random" element={<Random errors={errors} setErrors={setErrors} randomClicked={randomClicked} />} />
      </Routes>
    </div>
  );
}

export default App;
