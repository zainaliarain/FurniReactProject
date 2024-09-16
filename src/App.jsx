import React from "react";
import Nav from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Main from "./components/Hero/Main";
import Shop from "./components/Shop/Shop";

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
