import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faExchange } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "../../../assets/styles/index.css";
import "./_Slider/simpleSlider.scss";
import { topSellingItems } from "./_Slider/simpleSlider.data";
import { NavLink } from "react-router-dom";
import { StoreContext } from "../../../context";
import { useContext } from "react";
import Product from "../_Product";

function NewProduct() {
    const { cart } = useContext(StoreContext);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div style={{ marginTop: "40px" }}>
            <Container>
                <div className="section-title-nav">
                    <h2 className="product-title"> ТОП ПРОДАЖІВ</h2>
                    <div className="section-nav">
                        <ul className="section-tab-nav tab-nav">
                            <li className="active">
                                <NavLink data-toggle="tab" to="#tab1">
                                    Цікаві пропозиції
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <Slider {...settings}>
                    {topSellingItems.map((topSellingItem) => (
                        <Product product={{
                            id: topSellingItem.id,
                            name: topSellingItem.names,
                            image: topSellingItem.img,
                            price: topSellingItem.price,
                            oldprice: topSellingItem.oldprice,
                            category: topSellingItem.category,
                        }} />
                    ))}
                </Slider>
            </Container>
        </div>
    );
}

export default NewProduct;
