import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Main from "./components/Main";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Main />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/nav" element={<Nav />} />
          <Route path="/" element={<Hero />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
