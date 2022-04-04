import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import React,{useContext} from "react";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import DonorSignUpPage from "./pages/DonorSignUpPage";
import OrganizationSignUpPage from "./pages/OrganizationSignUpPage";
import Projects from "./pages/Projects";
import ProjectDescription from "./pages/ProjectDescription";
import DonationPage from "./pages/DonationPage";
import userContext from "./store/userContext";
import PostProjectPage from "./pages/PostProjectPage";
import AdministratorDashboardPage from "./pages/AdministratorDashboardPage";
import RequestsPage from "./pages/RequestsPage";
import RequestDetails from "./components/Admin requests/RequestsDetails/RequestDetails";
import NewAdminPage from "./pages/NewAdminPage";
import AssociationPage from "./pages/AssociationsPage";
import AssociationProfileUpdatePage from "./pages/AssociationProfileUpdatePage";
import DonorsListPage from "./pages/DonorsListPage";
import DonorProfileVisitor from "./pages/DonorProfileVisitor";
import DonorProfile from "./pages/DonorProfile";
import DonorEditProfile from "./pages/DonorEditProfile";
import DonorProfileChangePassword from "./pages/DonorProfileChangePassword";
import DonorProfileDonationHistory from "./pages/DonorProfileDonationHistory";
import AssociationsDashboardPage from "./pages/AssociationsDashboardPage";
import NotFoundError from "./pages/NotFoundError";
import AboutUsPage from "./pages/AboutUsPage";
import UpdateProjectPage from "./pages/UpdateProjectPage";

function App() {

  const userctx=useContext(userContext);

  return (
    <>
      {/* react help developping spa and react-router-dom help simulating pages
      using routes and their paths and the elements you need to insert into a route */}
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage className="element"/>} />
        <Route path="/about-us" element={<AboutUsPage className="element"/>} />
        <Route path="/projects" element={<Projects className="element"/>} />
        <Route path="/project-description" element={<ProjectDescription className="element"/>} />
        <Route path='/donation' element={<DonationPage className="element"/>} />
        {/* <Route path="/update-project" element={<UpdateProjectPage/>} />  */}

        <Route path="/associations" element={<AssociationPage/>} />
        {userctx.userRole==="ORGANISATION" && <> 
        <Route path='/post-project' element={<PostProjectPage  className="element"/>}></Route>
        <Route path="/association-dashboard" element={<AssociationsDashboardPage/>} />
        <Route path="/organization-profile" element={<AssociationProfileUpdatePage/>} />
        <Route path="/update-project" element={<UpdateProjectPage/>} />
        </>}

        <Route path="/donors"exact element={<DonorsListPage className="element"/>}  />
        <Route path="/donors/:profileId"exact element={<DonorProfileVisitor className="element"/>}  />
        {userctx.userRole==="DONOR" &&
        <>
        <Route path="/donor-profile"exact element={<DonorProfile className="element"/>}  />
        <Route path="/donor-profile/settings"  exact element={<DonorEditProfile className="element"/>}  />
        <Route path="/donor-profile/change-password"  exact element={<DonorProfileChangePassword className="element"/>}  />
        <Route path="/donor-profile/donation-history"exact element={<DonorProfileDonationHistory className="element"/>}  />
        </>}

        {userctx.userRole==="ADMIN" && 
        <><Route path="/administrator-dashboard" element={<AdministratorDashboardPage />} />
        <Route path="/requests" element={<RequestsPage />} />
        <Route path="/requests/:associationId" element={<RequestDetails/>} />
        <Route path="/new-administrator" element={<NewAdminPage/>} />
        </>}


        <Route path="/sign-in" element={<SignInPage className="element"/>} />
        <Route path="/donor-sign-up" element={<DonorSignUpPage className="element"/>} />
        <Route path="/organization-sign-up" element={<OrganizationSignUpPage className="element"/>} />


        <Route path="*" element={<NotFoundError  className="element"/>} />
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
