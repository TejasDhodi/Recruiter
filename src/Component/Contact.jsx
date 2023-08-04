import React from 'react'
import SectionTitle from './SectionTitle'
import { FaPhone, FaMailBulk } from "react-icons/fa"
import "./style.css"
const Contact = () => {
    return (
        <>
            <section id="connect">
                <div className="contactContainer">
                    <div className="contact_data">
                        <SectionTitle title="Any Questions? Write or Call us. We Will Write back in 12Hrs" description="This is a leading recruiting firm specializing in talent acquisition and workforce solutions. Our team of dedicated professionals is committed to connecting businesses with the best-suited candidates and assisting job seekers in finding rewarding career opportunities." />
                        <div className="alternate">
                            <span> <FaPhone /> +91 7559428838</span>
                            <span> <FaMailBulk /> tejasdhodi77@gmail.com</span>
                        </div>
                    </div>

                    <form className="contactForm">
                        <div className="inputContainer">
                            <div className="input">
                                <input type="text" name="Name" id="name" placeholder="Enter Your Name" />
                            </div>
                            <div className="input">
                                <input type="text" name="Number" id="contactNumber" placeholder="Enter Your Contact Number" />
                            </div>
                            <div className="input">
                                <input type="email" name="email" id="email" placeholder="Enter Your Email Id" />
                            </div>
                            <div className="input">
                                <textarea name="Description" id="description" cols="30" rows="10"
                                    placeholder="Describe Your Statement"></textarea>
                            </div>
                            <div className="submitBtn">
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact
