import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" exact element={<h1>this is the Home page</h1>} />
        <Route path="/about-us" element={<h1>about-us page</h1>} />
        <Route path="/projects" element={<h1>projects page</h1>} />
        <Route path="/associations" element={<h1>associations page</h1>} />
        <Route path="/donors" element={<h1>donors page</h1>} />
        <Route path="*" element={<h1>404 : page not found</h1>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
