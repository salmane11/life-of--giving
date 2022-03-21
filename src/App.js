import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import React from "react";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import DonorsListPage from "./pages/DonorsListPage";
import DonorProfile from "./pages/DonorProfile";
import DonorEditProfile from "./pages/DonorEditProfile";
import DonorProfileChangePassword from "./pages/DonorProfileChangePassword";
import DonorProfileDonationHistory from "./pages/DonorProfileDonationHistory";








function App() {
  return (
    <React.Fragment>
      {/* react help developping spa and react-router-dom help simulating pages
      using routes and their paths and the elements you need to insert into a route */}
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage className="element"/>} />
        <Route path="/about-us" element={<h1 className="element">this is about-us page</h1>} />
        <Route path="/projects" element={<h1 className="element">this is projects page</h1>} />
        <Route path="/associations" element={<h1 className="element">this is associations page</h1>} />
        <Route path="/donors"exact element={<DonorsListPage className="element"/>}  />
        <Route path="/donor-profile"exact element={<DonorProfile className="element"/>}  />
        <Route path="/donor-profile/settings"  exact element={<DonorEditProfile className="element"/>}  />
        <Route path="/donor-profile/change-password"  exact element={<DonorProfileChangePassword className="element"/>}  />
        <Route path="/donor-profile/donation-history"exact element={<DonorProfileDonationHistory className="element"/>}  />
        <Route path="/sign-in" element={<h1 className="element">this is sign-in page</h1>} />
        {/** the star * is for other paths which are not listed before (page does not exist)*/}
        <Route path="*" element={<h1 className="element">404 : page not found</h1>} />
      </Routes>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
