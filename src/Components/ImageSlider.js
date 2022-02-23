import React from "react";
import img from '../assets/truck_opposite.png';

//CSS file
import '../styles/ImageSlider.css';

const ImageSlider = () => {
    return (
        <section className="image-slider-container">
            <div className="truck-img">
                <img src={img} alt='Truck' />
            </div>
            <div className="tokari-info">
                <h1>Tokari</h1>
                <p>Tools and Platforms to support and grow your business in the agriculture supply chain</p>
            </div>
        </section>
    );
}

export default ImageSlider;