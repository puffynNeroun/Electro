import {Container} from "react-bootstrap";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faDollar} from '@fortawesome/free-solid-svg-icons';
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons'
import logo from './../../img/logo.png'
import Dropdown from "./__Dropdown/Dropdown.tsx";

import './header.scss'

const Header = () => {


    return (
        <header>
            <div id="top-header">
                <div className="container">
                    <ul className="header-links pull-left">
                        <li><a href="#"><FontAwesomeIcon className="fa fa-phone" icon={faPhone}/> +021-95-51-84</a></li>
                        <li><a href="#"><FontAwesomeIcon className="fa fa-envelope-open-o"
                                                         icon={faEnvelopeOpen}/> email@email.com</a></li>
                        <li><a href="#"><FontAwesomeIcon className='fa fa-dollar' icon={faDollar}/> 1734 Stonecoal Road</a>
                        </li>
                    </ul>
                    <ul className="header-links pull-right">
                        <li><a href="#"><FontAwesomeIcon className='fa fa-dollar' icon={faDollar}/> USD</a></li>
                        <li><a href="#"><FontAwesomeIcon className="fa fa-user-o" icon={faUser}/> My Account</a></li>
                    </ul>
                </div>
            </div>
            {/*TOP HEADER*/}

            {/*MAIN HEADER */}
            <div id="header">
                {/*container*/}
                <Container>
                    {/* row */}
                    <div className="row">
                        {/* LOGO */}
                        <div className="col-md-3">
                            <div className="header-logo">
                                <a href="#" className="logo">
                                    <img src={logo} alt="logo"/>
                                </a>
                            </div>
                        </div>
                        {/* /LOGO */}

                        {/* SEARCH BAR */}
                        <div className="col-md-6">
                            <div className="header-search">
                                <form>
                                    <select className="input-select" style={{color: 'gray'}}>
                                        <option value="0">All Categories</option>
                                        <option value="1">Category 01</option>
                                        <option value="1">Category 02</option>
                                    </select>
                                    <input className="input" placeholder="Search here"/>
                                    <button className="search-btn">Search</button>
                                </form>
                            </div>
                        </div>
                        {/* /SEARCH BAR */}

                        {/* ACCOUNT */}
                        <div className="col-md-3 clearfix">
                            <div className="header-ctn">
                                {/* Wishlist */}
                                <div>
                                    <a href="#">
                                        <FontAwesomeIcon className="fa fa-heart" icon={faHeart}/>
                                        <span style=
                                                  {
                                                      {
                                                          fontSize: '12px',
                                                          paddingTop: '5px'
                                                      }
                                                  }
                                        >Your Wishlist</span>
                                        <div className="qty">2</div>
                                    </a>
                                </div>
                                {/* /Wishlist */}

                                {/* Cart */}

                                <Dropdown/>


                                {/* /Cart */}

                                {/* Menu Toogle */}
                                <div className="menu-toggle">
                                    <a href="#">
                                        <i className="fa fa-bars"></i>
                                        <span>Menu</span>
                                    </a>
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