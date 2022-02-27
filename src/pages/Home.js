import React from "react";
import ImageSlider from "../Components/ImageSlider";
// import Products from "../Components/Products";
import AboutUs from "../Components/AboutUs";

const Home = () => {
    return (
        <>
            <ImageSlider />
            {/* Commented for Future Updates <Products /> */}
            <AboutUs />
        </>
    );
}

export default Home;