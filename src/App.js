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

function App() {
  // const { name } = useGlobalContext();
  return (
    <React.Fragment>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<FullAboutUs />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>

        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
