import {Component} from 'react';
import Slider from "react-slick";
import {Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faExchange} from "@fortawesome/free-solid-svg-icons";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

import './simpleSlider.scss'
import {sliderItems} from "./simpleSlider.data";


export default class NewProduct extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
        };

        return (
            <div>
                <Container>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h2> NEW PRODUCTS</h2>
                        <div className="section-nav">
                            <ul className="section-tab-nav tab-nav">
                                <li className="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
                                <li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
                                <li><a data-toggle="tab" href="#tab1">Cameras</a></li>
                                <li><a data-toggle="tab" href="#tab1">Accessories</a></li>
                            </ul>
                        </div>
                    </div>
                    <Slider {...settings}>


                        {sliderItems.map((sliderItem) =>
                            <div className="product slick-slide slick-current slick-active">

                                <div className="product-img">
                                    <img src={sliderItem.img} alt=""/>
                                    <div className="product-label">
                                        <span className="new">NEW</span>
                                    </div>
                                </div>
                                <div className="product-body">
                                    <p className="product-category">{sliderItem.category}</p>
                                    <h3 className="product-name"><a href="#">product name goes here</a>
                                    </h3>
                                    <h4 className="product-price">{sliderItem.price}
                                        <del
                                            className="product-old-price">{sliderItem.oldprice}</del>
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
                                <div className="add-to-cart">
                                    <button className="add-to-cart-btn"><FontAwesomeIcon icon={faShoppingCart}
                                                                                         className="fa fa-shopping-cart"/> add
                                        to cart
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
