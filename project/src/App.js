import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import DriverRegistrationForm from "./components/DriverRegistrationForm";
import GuideRegistrationForm from "./components/GuideRegistrationForm";
import TravelerRegistrationForm from "./components/TravelerRegistrationForm";
import TermsCondition from "./components/TermsCondition";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Home from "./Home";

const Layout = () => {
  const location = useLocation();

  // Define the routes where the header should be hidden
  const hideHeaderRoutes = [
    "/login",
    "/signup",
    "/driver-signup",
    "/guide-signup",
  ];

  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <div className="App">
      {!shouldHideHeader && <Header />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/traveler-signup" element={<TravelerRegistrationForm />} />
        <Route path="/driver-signup" element={<DriverRegistrationForm />} />
        <Route path="/guide-signup" element={<GuideRegistrationForm />} />
        <Route path="/terms" element={<TermsCondition />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      {!shouldHideHeader && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
