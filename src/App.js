import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Components/pages/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from "./Components/pages/Components";
import Home from "./Components/pages/Home";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="" element={<Navbar />} >
            <Route index element={<Home />} />
          </Route>
          <Route path="/component" element={<Components />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
