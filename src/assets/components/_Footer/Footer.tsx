import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarker} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
/*<li><a href="#"><FontAwesomeIcon icon={faVisaCreditCard} /></a></li>
<li><a href="#"><FontAwesomeIcon icon={faCreditCard} /></a></li>
<li><a href="#"><FontAwesomeIcon icon={faPaypalCreditCard} /></a></li>
<li><a href="#"><FontAwesomeIcon icon={faMasterCardCreditCard} /></a></li>
<li><a href="#"><FontAwesomeIcon icon={faDiscoverCreditCard} /></a></li>
<li><a href="#"><FontAwesomeIcon icon={faAmericanExpressCreditCard} /></a></li>*/
import {faCreditCard} from "@fortawesome/free-solid-svg-icons";



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
                                    <li><a href="#"><FontAwesomeIcon icon={faMapMarker} className="fa fa-map-marker" />1734 Stonecoal Road</a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faPhone} style={{color: '#B9BABC'}}  className="fa fa-phone" />+021-95-51-84</a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faEnvelope} className="fa fa-envelope-o" />email@email.com</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-title">Categories</h3>
                                <ul className="footer-links">
                                    <li><a href="#">Hot deals</a></li>
                                    <li><a href="#">Laptops</a></li>
                                    <li><a href="#">Smartphones</a></li>
                                    <li><a href="#">Cameras</a></li>
                                    <li><a href="#">Accessories</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-title">Information</h3>
                                <ul className="footer-links">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Orders and Returns</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-title">Service</h3>
                                <ul className="footer-links">
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">View Cart</a></li>
                                    <li><a href="#">Wishlist</a></li>
                                    <li><a href="#">Track My Order</a></li>
                                    <li><a href="#">Help</a></li>
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
                                <li><a href="#"><FontAwesomeIcon icon={faCreditCard} />Pay</a></li>
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