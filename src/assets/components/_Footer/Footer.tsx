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
                    <div className="row" style={{justifyContent: 'space-between', alignItems: 'center'}}>
                        <div className="col-md-4 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-title">Про нас</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut.</p>
                                <ul className="footer-links">
                                    <li><NavLink to="/"><FontAwesomeIcon icon={faMapMarker} className="fNavLink fa-map-marker" />1734 Stonecoal Road</NavLink ></li>
                                    <li><NavLink to="/"><FontAwesomeIcon icon={faPhone} style={{color: '#B9BABC'}}  className="fNavLink fa-phone" />+021-95-51-84</NavLink ></li>
                                    <li><NavLink to="/"><FontAwesomeIcon icon={faEnvelope} className="fNavLink fa-envelope-o" />email@email.com</NavLink ></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-title">Категорії</h3>
                                <ul className="footer-links">
                                    <li><NavLink to="/">Гарячі пропозиції</NavLink ></li>
                                    <li><NavLink to="/">Ноутбуки</NavLink ></li>
                                    <li><NavLink to="/">Смартфони</NavLink ></li>
                                    <li><NavLink to="/">Камери</NavLink ></li>
                                    <li><NavLink to="/">Аксесуари</NavLink ></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-title">Сервіс</h3>
                                <ul className="footer-links">
                                    <li><NavLink to="/">Мій обліковий запис</NavLink ></li>
                                    <li><NavLink to="/">Переглянути кошик</NavLink ></li>
                                    <li><NavLink to="/">Список побажань</NavLink ></li>
                                    <li><NavLink to="/">Відстежити моє замовлення</NavLink ></li>
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
                                <li><NavLink to="/"><FontAwesomeIcon icon={faCreditCard} />Оплатити</NavLink></li>
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