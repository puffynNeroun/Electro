import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarker} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faCreditCard} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";


const Footer = () => {
    return (
        <footer id="footer">
            {/*top footer*/}
            <div className="section">
                {/* container*/}
                <div className="container">
                    {/* row*/}
                    <div className="row">
                        <div className="col-md-3 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-title">About Us</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut.</p>
                                <ul className="footer-links">
                                    <li><NavLink to="/"><FontAwesomeIcon icon={faMapMarker} className="fNavLink fa-map-marker" />1734 Stonecoal Road</NavLink ></li>
                                    <li><NavLink to="/"><FontAwesomeIcon icon={faPhone} style={{color: '#B9BABC'}}  className="fNavLink fa-phone" />+021-95-51-84</NavLink ></li>
                                    <li><NavLink to="/"><FontAwesomeIcon icon={faEnvelope} className="fNavLink fa-envelope-o" />email@email.com</NavLink ></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-title">Categories</h3>
                                <ul className="footer-links">
                                    <li><NavLink to="/">Hot deals</NavLink ></li>
                                    <li><NavLink to="/">Laptops</NavLink ></li>
                                    <li><NavLink to="/">Smartphones</NavLink ></li>
                                    <li><NavLink to="/">Cameras</NavLink ></li>
                                    <li><NavLink to="/">Accessories</NavLink ></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-title">Information</h3>
                                <ul className="footer-links">
                                    <li><NavLink to="/">About Us</NavLink ></li>
                                    <li><NavLink to="/">Contact Us</NavLink ></li>
                                    <li><NavLink to="/">Privacy Policy</NavLink ></li>
                                    <li><NavLink to="/">Orders and Returns</NavLink ></li>
                                    <li><NavLink to="/">Terms & Conditions</NavLink ></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-title">Service</h3>
                                <ul className="footer-links">
                                    <li><NavLink to="/">My Account</NavLink ></li>
                                    <li><NavLink to="/">View Cart</NavLink ></li>
                                    <li><NavLink to="/">Wishlist</NavLink ></li>
                                    <li><NavLink to="/">Track My Order</NavLink ></li>
                                    <li><NavLink to="/">Help</NavLink ></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* /row*/}
                </div>
                {/* /container*/}
            </div>
            {/* /top footer*/}

            {/* bottom footer*/}
            <div id="bottom-footer" className="section">
                <div className="container">
                    {/* row*/}
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <ul className="footer-payments">
                                <li><NavLink to="/"><FontAwesomeIcon icon={faCreditCard} />Pay</NavLink></li>
                            </ul>
                            <span className="copyright">
                                Copyright &copy;
                               2023
							</span>
                        </div>
                    </div>
                    {/* /row*/}
                </div>
                {/* /container*/}
            </div>
            {/* /bottom footer*/}
        </footer>
    );
};

export default Footer;