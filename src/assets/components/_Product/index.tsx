import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faExchange } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "../../../assets/styles/index.css"
import "./styles.scss"
import { NavLink } from "react-router-dom";
import { Product } from "../../store/CartStore";
import { StoreContext } from "../../../context";
import { useContext } from "react";

function ProductComponent({ product }: { product: Product }) {
    const { cart } = useContext(StoreContext);
    return (
        <div className="product slick-slide slick-current slick-active">
            <div className="product-img">
                <img src={product.image} alt="" />
                <div className="product-label">
                    <span className="new">НОВИЙ</span>
                </div>
            </div>
            <div className="product-body">
                <p className="product-category">{product.category}</p>
                <h3 className="product-name">
                    <NavLink to="/product">{product.name}</NavLink>
                </h3>
                <h4 className="product-price">
                    ${(product.price / 100).toFixed(2)}
                    <del className="product-old-price">
                        ${(product.oldprice / 100).toFixed(2)}
                    </del>
                </h4>
                <div className="product-rating">
                    <FontAwesomeIcon
                        icon={faStar}
                        className="fa fa-star"
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                        icon={faStar}
                        className="fa fa-star"
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                        icon={faStar}
                        className="fa fa-star"
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                        icon={faStar}
                        className="fa fa-star"
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                        icon={faStar}
                        className="fa fa-star"
                    ></FontAwesomeIcon>
                </div>
                <div className="product-btns">
                    <button className="add-to-wishlist" style={{ right: 0 }}>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className="fa fa-heart-o"
                            style={{ width: "15px" }}
                        />
                        <span className="tooltipp">
                            додати до списку бажань
                        </span>
                    </button>
                    <button className="add-to-compare">
                        <FontAwesomeIcon
                            icon={faExchange}
                            className="fa fa-exchange"
                            style={{ width: "15px" }}
                        />
                        <span className="tooltipp">додати для порівняння</span>
                    </button>
                    <button className="quick-view">
                        <FontAwesomeIcon
                            icon={faEye}
                            className="fa fa-eye"
                            style={{ width: "15px" }}
                        />
                        <span className="tooltipp">швидкий перегляд</span>
                    </button>
                </div>
            </div>
            <div className="add-to-cart" style={{ paddingTop: "38px" }}>
                <button
                    className="add-to-cart-btn"
                    style={{ fontSize: "inherit" }}
                    onClick={() => cart.add(product)}
                >
                    <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="fa fa-shopping-cart"
                    />
                    <NavLink to={""} className="add-to-cart-btn-link">
                        {" "}
                        додати в кошик
                    </NavLink>
                </button>
            </div>
        </div>
    );
}

export default ProductComponent;
