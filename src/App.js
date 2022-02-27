import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import React from "react";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <React.Fragment>
      {/* react help developping spa and react-router-dom help simulating pages
      using routes and their paths and the elements you need to insert into a route */}
      <Header />
      <Routes>
        <Route path="/" exact element={<h1 className="element">this is the Home page</h1>} />
        <Route path="/about-us" element={<h1 className="element">this is about-us page</h1>} />
        <Route path="/projects" element={<h1 className="element">this is projects page</h1>} />
        <Route path="/associations" element={<h1 className="element">this is associations page</h1>} />
        <Route path="/donors" element={<h1 className="element">this is donors page</h1>} />
        <Route path="/sign-in" element={<h1 className="element">this is sign-in page</h1>} />
        {/** the star * is for other paths which are not listed before (page does not exist)*/}
        <Route path="*" element={<h1 className="element">404 : page not found</h1>} />
      </Routes>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
