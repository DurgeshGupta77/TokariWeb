import React from "react";
import { useGlobalContext } from "../context";
import { AiFillWarning } from "react-icons/ai";
import { FaCheckSquare, FaMailBulk } from "react-icons/fa";

//Form.js
import emailjs from '@emailjs/browser';

import "../styles/ContactUs.css";

const ContactUs = () => {
    const { name, setName, phoneNumber, setPhoneNumber, address, setAddress, error, setError, message, setMessage, success, setSuccess, messageField, setMessageField, loading, setLoading } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        setLoading(true);

        if (!name) {
            setError(true);
            setLoading(false);
            setMessage('Name Field Empty. Please fill the name field to proceed');
            setTimeout(() => {
                setError(false);
                setMessage('');
            }, 3000)
        }
        else if (phoneNumber.length < 10 || phoneNumber.length > 10) {
            setError(true);
            setLoading(false);
            setMessage('Invalid Phone Number Length. Please Check the length of Phone Number once again!');
            setTimeout(() => {
                setError(false);
                setMessage('');
            }, 3000)
        }
        else {
            emailjs.sendForm('service_ez1avos', 'template_vp468ne', e.target, 'zN5jXGUEm7FuTKBou')
                .then((result) => {
                    // console.log(result.text);
                    setError(false);
                    setSuccess(true);
                    setMessage('Thank you for connecting with us! We have recieved your mail and will connect with you as soon as possible');
                    setLoading(false);
                    setTimeout(() => {
                        setSuccess(false);
                        setMessage('');
                    }, 3000)
                }, (error) => {
                    // console.log(error.text);
                    setError(true);
                    setMessage('Oops! Some Error occoured! Please try again later!');
                    setLoading(false);
                    setTimeout(() => {
                        setError(false);
                        setMessage('');
                    }, 3000)
                });
        }

    }

    const maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }

    return (
        <section className="form-section">
            <div className="form-div">
                <div className={`${success ? 'success show' : 'success'}`}>
                    <div>
                        <FaCheckSquare className="icon" />
                    </div>
                    <div>
                        {message}
                    </div>
                </div>
                <div className={`${error ? 'error show' : 'error'}`}>
                    <div>
                        <AiFillWarning className="icon" />
                    </div>
                    <div>
                        {message}
                    </div>
                </div>
                <h1>Be a part of Tokari and help us improve the business of Bazaar Retailers, Farmers and Wholesalers!</h1>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="controlled-form">
                        <div className="form-label">
                            <label htmlFor="name">Full Name: </label>
                        </div>
                        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="off" placeholder="Enter your name...." />
                    </div>
                    <div className="controlled-form">
                        <div className="form-label">
                            <label htmlFor="phoneNumber">Phone Number: </label>
                        </div>
                        <div className="phone-input-fields">
                            <input type="text" value="+977-" disabled={true} className='phone-code' />
                            <input type="number" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} autoComplete="off" maxLength={10} onInput={maxLengthCheck} placeholder="Enter your Mobile Number" className="number-field" />
                        </div>
                    </div>
                    {/* <div className="controlled-form">
                        <div className="form-label">
                            <label htmlFor="address">Address: </label>
                        </div>
                        <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} autoComplete="off" placeholder="Enter your Address" />
                    </div> */}
                    <div className="controlled-form">
                        <div className="form-label">
                            <label htmlFor="address">Email Address: (Optional) </label>
                        </div>
                        <input type="email" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} autoComplete="off" placeholder="Enter your Email ID:" />
                    </div>
                    <div className="controlled-form">
                        <div className="form-label">
                            <label htmlFor="message">Message: (Optional) </label>
                        </div>
                        <textarea id="message" name="message" rows={4} cols={100} value={messageField} onChange={(e) => setMessageField(e.target.value)} autoComplete="off" placeholder="Enter your Message" />
                    </div>
                    {/* {`${loading ? <h1>Please wait sending your mail....</h1> : <button type="submit">Connect with Tokari!</button>}`} */}
                    {!loading && <button type="submit">Connect with Tokari!</button>}
                    {loading &&
                        <div className="sending-mail-container">
                            <h1>Please wait.....Delivering your mail!!</h1>
                            {/* <FaMailBulk className="mail-icon" /> */}
                        </div>
                    }
                </form>
            </div>
        </section>
    );
}

export default ContactUs;