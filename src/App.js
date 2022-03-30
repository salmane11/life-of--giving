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
import DonationPage from "./pages/DonationPage";
import { UserContextProvider } from "./store/userContext";
import PostProjectPage from "./pages/PostProjectPage";
import AdministratorDashboardPage from "./pages/AdministratorDashboardPage";
import RequestsPage from "./pages/RequestsPage";
import RequestDetails from "./components/Admin requests/RequestsDetails/RequestDetails";
import NewAdminPage from "./pages/NewAdminPage";
import AssociationPage from "./pages/AssociationsPage";
import AssociationProfileUpdatePage from "./pages/AssociationProfileUpdatePage";
import DonorsListPage from "./pages/DonorsListPage";
import DonorProfile from "./pages/DonorProfile";
import DonorEditProfile from "./pages/DonorEditProfile";
import DonorProfileChangePassword from "./pages/DonorProfileChangePassword";
import DonorProfileDonationHistory from "./pages/DonorProfileDonationHistory";
import AssociationsDashboardPage from "./pages/AssociationsDashboardPage";




function App() {
  return (
    <UserContextProvider>
      {/* react help developping spa and react-router-dom help simulating pages
      using routes and their paths and the elements you need to insert into a route */}
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage className="element"/>} />
        <Route path="/about-us" element={<h1 className="element">this is about-us page</h1>} />
        <Route path="/projects" element={<Projects className="element"/>} />
        <Route path="/project-description" element={<ProjectDescription className="element"/>} />
        <Route path='/donation' element={<DonationPage className="element"/>} />
        <Route path='/post-project' element={<PostProjectPage  className="element"/>}></Route>
        <Route path="/associations" element={<AssociationPage/>} />
        <Route path="/association-dashboard" element={<AssociationsDashboardPage/>} />
        <Route path="/organization-profile" element={<AssociationProfileUpdatePage/>} />
        <Route path="/donors"exact element={<DonorsListPage className="element"/>}  />
        <Route path="/donor-profile"exact element={<DonorProfile className="element"/>}  />
        <Route path="/donor-profile/settings"  exact element={<DonorEditProfile className="element"/>}  />
        <Route path="/donor-profile/change-password"  exact element={<DonorProfileChangePassword className="element"/>}  />
        <Route path="/donor-profile/donation-history"exact element={<DonorProfileDonationHistory className="element"/>}  />
        <Route path="/administrator-dashboard" element={<AdministratorDashboardPage />} />
        <Route path="/requests" element={<RequestsPage />} />
        <Route path="/requests/:associationId" element={<RequestDetails/>} />
        <Route path="/new-administrator" element={<NewAdminPage/>} />
        <Route path="/sign-in" element={<SignInPage className="element"/>} />
        <Route path="/donor-sign-up" element={<DonorSignUpPage className="element"/>} />
        <Route path="/organization-sign-up" element={<OrganizationSignUpPage className="element"/>} />
        <Route path="*" element={<h1 className="element">404 : page not found</h1>} />
      </Routes>
      <Footer/>
    </UserContextProvider>
  );
}

export default App;
