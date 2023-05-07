import 'bootstrap/dist/css/bootstrap-grid.min.css'
import '../../styles/index.css'
import './productMain.scss'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExchange, faEye, faHeart, faShoppingCart, faStar} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {products} from "./productMainSec2.data";

const ProductMainSec2 = () => {
    return (
        <div>
            <div className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">

                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h3 className="title">Супутні товари</h3>
                            </div>
                        </div>

                        {/* product */}
                        {products.map((product) =>
                            <div key={product.key} className="col-md-3 col-xs-6">
                                <div className="product">
                                    <div className="product-img">
                                        <img src={product.img} alt=""/>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">{product.category}</p>
                                        <h3 className="product-name"><a href="#">{product.names}</a></h3>
                                        <h4 className="product-price">{product.price}<del
                                            className="product-old-price">{product.oldprice}</del></h4>
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
                                                                 className="fa fa-heart-o"
                                                                 style={{width: '15px'}}/><span
                                                className="tooltipp">додати до списку бажань</span></button>
                                            <button className="add-to-compare"><FontAwesomeIcon icon={faExchange}
                                                                                                className="fa fa-exchange"
                                                                                                style={{width: '15px'}}/><span
                                                className="tooltipp">додати для порівняння</span></button>
                                            <button className="quick-view"><FontAwesomeIcon icon={faEye}
                                                                                            className="fa fa-eye"
                                                                                            style={{width: '15px'}}/><span
                                                className="tooltipp">швидкий перегляд</span></button>
                                        </div>
                                    </div>
                                    <div className="add-to-cart add-to-cart__product__btn" style={{paddingTop: '38px'}}>
                                        <button className="add-to-cart-btn" style={{fontSize: "inherit"}}>
                                            <FontAwesomeIcon
                                                icon={faShoppingCart}
                                                className="fa fa-shopping-cart"/> <NavLink to={'/'}
                                                                                           className='add-to-cart-btn-link'> додати в кошик</NavLink>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* /product */}

                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>
        </div>
    );
};

export default ProductMainSec2;