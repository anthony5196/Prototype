import React from "react";
import MyNavbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/Cards/SignUp/SignUp";
import Addition from "./Components/Addition";
import Example from "./Components/Cards/Example/Example";
import Recipe from "./Components/Cards/Recipe/Recipe";

import "./App.css";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <SignUp />
      <Recipe />
      <Addition />
    </div>
  );
}

export default App;
