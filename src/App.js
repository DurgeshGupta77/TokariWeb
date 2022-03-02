import React from "react";
import './styles/App.css';

//Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

//Pages
import FullAboutUs from "./pages/FullAboutUs";
import Home from "./pages/Home";

//React-Router DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Team from "./Components/Team";
import ContactUs from "./pages/ContactUs";
import FounderTestimonials from "./Components/FounderTestimonials";

function App() {
  // const { name } = useGlobalContext();
  return (
    <React.Fragment>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<FullAboutUs />} />
          <Route path="/singleAbout" element={<AboutUs />} />
          <Route path="/people" element={<Team />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/testimonials" element={<FounderTestimonials />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>

        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
