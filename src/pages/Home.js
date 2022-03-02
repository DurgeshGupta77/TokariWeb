import React from "react";
import ImageSlider from "../Components/ImageSlider";
// import Products from "../Components/Products";
import AboutUs from "../Components/AboutUs";
import Team from "../Components/Team";
import Contact from "../Components/Contact";
import FounderTestimonials from "../Components/FounderTestimonials";

const Home = () => {
    return (
        <>
            <ImageSlider />
            {/* Commented for Future Updates <Products /> */}
            <AboutUs />
            <Team />
            <Contact />
            <FounderTestimonials />
        </>
    );
}

export default Home;