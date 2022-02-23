import React from "react";
import './styles/App.css';

//Components
import Navbar from "./Components/Navbar";
import ImageSlider from "./Components/ImageSlider";
// import Products from "./Components/Products";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";

function App() {
  // const { name } = useGlobalContext();
  return (
    <React.Fragment>
      <Navbar />
      <ImageSlider />
      {/* Commented for Future Updates <Products /> */}
      <AboutUs />
      <Footer />
    </React.Fragment>
  );
}

export default App;
