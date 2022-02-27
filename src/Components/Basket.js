import React from "react";

//Images
import basket from "../assets/basket.jpg";
import lettuce from "../assets/lettuce-icon.png";
import certified from "../assets/certified.png";
import fresh from "../assets/fresh.png";

//CSS
import "../styles/Basket.css";


const Basket = () => {
    return (
        <React.Fragment>
            <div className="basket-container">
                <div className="benefits-container">
                    <div className="benefits1">
                        <div className="title-grp">
                            <img src={lettuce} alt="some-icon" />
                            <h1>100% Organic</h1>
                        </div>
                        <p>Suspendisse ultricies nisi vel quam suscipit, et rutrum odio porttitor.</p>
                    </div>
                    <div className="benefits2">
                        <div className="title-grp">
                            <img src={lettuce} alt="some-icon" />
                            <h1>100% Organic</h1>
                        </div>
                        <p>Suspendisse ultricies nisi vel quam suscipit, et rutrum odio porttitor.</p>
                    </div>
                    <div className="benefits3">
                        <div className="title-grp">
                            <img src={lettuce} alt="some-icon" />
                            <h1>100% Organic</h1>
                        </div>
                        <p>Suspendisse ultricies nisi vel quam suscipit, et rutrum odio porttitor.</p>
                    </div>
                </div>
                <div>
                    <img src={basket} alt="basket" />
                </div>
                <div className="benefits-container">
                    <div className="benefits1">
                        <div className="title-grp">
                            <img src={lettuce} alt="some-icon" />
                            <h1>100% Organic</h1>
                        </div>
                        <p>Suspendisse ultricies nisi vel quam suscipit, et rutrum odio porttitor.</p>
                    </div>
                    <div className="benefits2">
                        <div className="title-grp">
                            <img src={lettuce} alt="some-icon" />
                            <h1>100% Organic</h1>
                        </div>
                        <p>Suspendisse ultricies nisi vel quam suscipit, et rutrum odio porttitor.</p>
                    </div>
                    <div className="benefits3">
                        <div className="title-grp">
                            <img src={lettuce} alt="some-icon" />
                            <h1>100% Organic</h1>
                        </div>
                        <p>Suspendisse ultricies nisi vel quam suscipit, et rutrum odio porttitor.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Basket;