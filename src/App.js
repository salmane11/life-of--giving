import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import React from "react";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import DonorSignUpPage from "./pages/DonorSignUpPage";
import OrganizationSignUpPage from "./pages/OrganizationSignUpPage";
import Projects from "./pages/Projects";
import ProjectDescription from "./pages/ProjectDescription";



function App() {
  return (
    <React.Fragment>
      {/* react help developping spa and react-router-dom help simulating pages
      using routes and their paths and the elements you need to insert into a route */}
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage className="element"/>} />
        <Route path="/about-us" element={<h1 className="element">this is about-us page</h1>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-description" element={<ProjectDescription className="element"/>} />
        <Route path="/associations" element={<h1 className="element">this is associations page</h1>} />
        <Route path="/donors" element={<h1 className="element">this is donors page</h1>} />
        <Route path="/sign-in" element={<SignInPage className="element"/>} />
        <Route path="/donor-sign-up" element={<DonorSignUpPage className="element"/>} />
        <Route path="/organization-sign-up" element={<OrganizationSignUpPage className="element"/>} />
        {/** the star * is for other paths which are not listed before (page does not exist)*/}
        <Route path="*" element={<h1 className="element">404 : page not found</h1>} />
      </Routes>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
