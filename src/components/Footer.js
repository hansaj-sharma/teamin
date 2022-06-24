import "./Footer.css";
import React from "react";
// import logo from '../../assets/teamin_logo.png'

const Footer = () => {
    return (
    <>
        <footer>
            <div className="containerr">
                <div className="row">
                    <div className="one">
                        <div className="row">
                           <div className="three">
                           <div className="img">
                             {/* <img src={logo} alt="" srcset="" /> */}
                             </div>
                             <h2>About Company</h2>
                             <p>TeamIn Technologies (P) Ltd. is a diversified IT company. Our competencies lie in setting up 
                             dedicated software development teams for software product development, application maintenance and 
                             independent software testing with a local project management team.</p>
                           </div>

                           <div className="four">
                             <h2>Services</h2>
                             <div className="box">
                             <ul className="subhead">
                                 <li>
                                     <a href="#">Tailored Product</a>
                                 </li>
                                 <li>
                                     <a href="#">Cloud Computing</a>
                                 </li>
                                 <li>
                                     <a href="#">Web Designing</a>
                                 </li>
                                 <li>
                                     <a href="#">Desktop Applications</a>
                                 </li>
                                 <li>
                                     <a href="#">Social Integration</a>
                                 </li>
                             </ul>
                             </div>
                           </div>

                           <div className="five">
                             <h2>Useful Links</h2>
                             <ul className="subhead" >
                                 <li>
                                     <a href="#">About Us</a>
                                 </li>
                                 <li>
                                     <a href="#">Services</a>
                                 </li>
                                 <li>
                                     <a href="#">Products</a>
                                 </li>
                                 <li>
                                     <a href="#">Testimonials</a>
                                 </li>
                             </ul>
                           </div>

                           <div className="six">
                           <ul>
                           <li>
                            <h2>Contact Us</h2>
                            </li>
                             <li>
                             <a href="#">Headquarters</a>
                             </li>
                             <li>
                             <a href="#">Gandhinagar </a>
                             </li>
                             <li>
                             <a href="#">Main Road,Berhampur,</a>
                             </li>
                             <li>
                             <a href="#"> Odisha</a>
                             </li>
                             <li>
                             <a href="#">Phone no.</a>
                             </li>
                             <li>
                             <a href="#">+91 680 2220668</a>
                             </li>
                             <li>
                             <a href="#">Email address</a>
                             </li>
                             </ul>
                           </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
    );
}

export default Footer;