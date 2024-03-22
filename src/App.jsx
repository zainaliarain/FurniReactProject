import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Shop from "./components/Shop";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/hero" element={<Hero />} />
        <Route path="/main" element={<Main />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
