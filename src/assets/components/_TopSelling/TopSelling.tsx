import {Component} from 'react';
import Slider from "react-slick";
import {Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faExchange} from "@fortawesome/free-solid-svg-icons";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

import '../../../assets/styles/index.css'
import './_Slider/simpleSlider.scss'
import {topSellingItems} from "./_Slider/simpleSlider.data";
import {NavLink} from "react-router-dom";


export default class NewProduct extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true
        };

        return (
            <div style={{marginTop: '40px'}}>
                <Container>
                    <div className='section-title-nav'>
                        <h2 className='product-title'> Top selling</h2>
                        <div className="section-nav">
                            <ul className="section-tab-nav tab-nav">
                                <li className="active"><NavLink data-toggle="tab" to="#tab1">Laptops</NavLink></li>
                                <li><NavLink data-toggle="tab" to="#tab2">Smartphones</NavLink></li>
                                <li><NavLink data-toggle="tab" to="#tab3">Cameras</NavLink></li>
                                <li><NavLink data-toggle="tab" to="#tab4">Accessories</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <Slider {...settings}>


                        {topSellingItems.map((topSellingItem) =>
                            <div key={topSellingItem.key} className="product slick-slide slick-current slick-active">

                                <div className="product-img">
                                    <img src={topSellingItem.img} alt=""/>
                                    <div className="product-label">
                                        <span className="new">NEW</span>
                                    </div>
                                </div>
                                <div className="product-body">
                                    <p className="product-category">{topSellingItem.category}</p>
                                    <h3 className="product-name"><NavLink to="/product">{topSellingItem.names}</NavLink>
                                    </h3>
                                    <h4 className="product-price">{topSellingItem.price}
                                        <del
                                            className="product-old-price">{topSellingItem.oldprice}</del>
                                    </h4>
                                    <div className="product-rating">
                                        <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
                                    </div>
                                    <div className="product-btns">
                                        <button className="add-to-wishlist" style={{right: 0}}>
                                            <FontAwesomeIcon icon={faHeart}
                                                             className="fa fa-heart-o" style={{width: '15px'}}/><span
                                            className="tooltipp">add to wishlist</span></button>
                                        <button className="add-to-compare"><FontAwesomeIcon icon={faExchange}
                                                                                            className="fa fa-exchange"
                                                                                            style={{width: '15px'}}/><span
                                            className="tooltipp">add to compare</span></button>
                                        <button className="quick-view"><FontAwesomeIcon icon={faEye}
                                                                                        className="fa fa-eye"
                                                                                        style={{width: '15px'}}/><span
                                            className="tooltipp">quick view</span></button>
                                    </div>
                                </div>
                                <div className="add-to-cart" style={{paddingTop: '38px'}}>
                                    <button className="add-to-cart-btn" style={{fontSize: "inherit"}}><FontAwesomeIcon
                                        icon={faShoppingCart}
                                        className="fa fa-shopping-cart"/><NavLink to={'/'} className='add-to-cart-btn-link'> add to
                                        cart</NavLink>
                                    </button>
                                </div>
                            </div>
                        )}
                    </Slider>
                </Container>
            </div>
        );
    }
}