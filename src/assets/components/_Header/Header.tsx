import {Container} from "react-bootstrap";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faHeart, faEnvelopeOpen, faUser, faMapMarker} from '@fortawesome/free-solid-svg-icons';
import logo from './../../img/logo.png'
import Dropdown from "./__Cart/Cart.tsx";

import './header.scss'
import BurgerMenu from "./Menu/BurgerMenu";
import {NavLink} from "react-router-dom";


const Header = () => {


    return (
        <header>
            <div id="top-header">
                <div className="container">
                    <ul className="header-links pull-left">
                        <li><a href="#"><FontAwesomeIcon className="fa fa-phone" icon={faPhone}/> +38066-666-66-66</a>
                        </li>
                        <li><a href="#"><FontAwesomeIcon className="fa fa-envelope-open-o"
                                                         icon={faEnvelopeOpen}/> email@email.com</a></li>
                        <li><a href="#"><FontAwesomeIcon className='fa fa-dollar' icon={faMapMarker}/> 1734 Stonecoal
                            Road</a>
                        </li>
                    </ul>
                    <ul className="header-links pull-right">
                        <li><NavLink to="/myAccount"><FontAwesomeIcon className="fa fa-user-o" icon={faUser}/> Мій
                            аккаунт</NavLink></li>
                    </ul>
                </div>
            </div>
            {/*{/TOP HEADER/}*/}

            {/*/!*MAIN HEADER /}*/}
            <div id="header">
                {/*{/container/}*/}
                <Container>
                    {/*{/ ряд /}*/}
                    <div className="row">
                        {/*{/ ЛОГОТИП /}*/}
                        <div className="col-md-3 col-lg-3">
                            <div className="header-logo">
                                <NavLink to="/" className="logo">
                                    <img src={logo} alt="логотип"/>
                                </NavLink>
                            </div>
                        </div>
                        {/*{/ / ЛОГОТИП *!/*/}

                        {/* SEARCH BAR */}
                        <div className="col-md-9 col-lg-6">
                            <div className="header-search">
                                <form>
                                    <select className="input-select" style={{color: 'сірий'}}>
                                        <option value="0">Усі категорії</option>
                                        <option value="1">Категорія 01</option>
                                        <option value="1">Категорія 02</option>
                                    </select>
                                    <input className="input" placeholder="Шукайте тут"/>
                                    <button className="search-btn">Пошук</button>
                                </form>
                            </div>
                        </div>
                        {/* /SEARCH BAR */}

                        {/* ACCOUNT */}
                        <div className="col-md-12 col-lg-3 clearfix">
                            <div className="header-ctn">
                                {/* Wishlist */}
                                <div>
                                    <NavLink to="/wishlist">
                                        <FontAwesomeIcon className="fa fa-heart" icon={faHeart}/>
                                        <span style=
                                                  {
                                                      {
                                                          fontSize: '12px',
                                                          paddingTop: '5px'
                                                      }
                                                  }
                                        >Список побажань</span>

                                    </NavLink>
                                </div>
                                {/* /Wishlist */}

                                {/* Cart */}

                                <Dropdown/>


                                {/* /Cart */}

                                {/* Menu Toogle */}
                                <div className="menu-toggle">
                                    <BurgerMenu
                                        links={[{label: 'Головна', url: '/'},
                                            {label: 'Магазин', url: '/store'},
                                            {label: 'Категорії', url: '/'},
                                        ]}
                                    />
                                </div>
                                {/* /Menu Toogle */}
                            </div>
                        </div>
                        {/*/ACCOUNT */}
                    </div>
                    {/* row */}
                </Container>
                {/* container */}
            </div>
            {/* /MAIN HEADER */}
        </header>
    );
};

export default Header;