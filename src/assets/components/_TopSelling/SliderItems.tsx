import Slider from "react-slick";
import {useState, useEffect} from "react";
import { Container } from "react-bootstrap";

import "../../../assets/styles/index.css";
import "./_Slider/simpleSlider.scss";
import {sliderItems} from "./_Slider/simpleSlider.data";
import { NavLink } from "react-router-dom";
import Product from "../_Product";



function NewProduct({name}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        const delay = 0; // 5 seconds delay

        const timeoutId = setTimeout(() => {
            fetch('https://api.example.com/data')
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => console.error(error));
        }, delay);

        return () => clearTimeout(timeoutId);
    }, []);

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
                    <h2 className="product-title"> {name}</h2>
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
                    {sliderItems.map((sliderItem) => (
                        <Product product={{
                            id: sliderItem.id,
                            name: sliderItem.names,
                            image: sliderItem.img,
                            price: sliderItem.price,
                            oldprice: sliderItem.oldprice,
                            category: sliderItem.category,
                        }} key={sliderItem.key}/>
                    ))}
                </Slider>
            </Container>
        </div>
    );
}

export default NewProduct;
