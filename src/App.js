import Home from "./Home";
import Random from "./Random";
import Nav from "./Nav";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {

  const [errors, setErrors] = useState([]);

  return (
    <div className="App">
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="random" element={<Random errors={errors} setErrors={setErrors} />} />
      </Routes>
    </div>
  );
}

export default App;
