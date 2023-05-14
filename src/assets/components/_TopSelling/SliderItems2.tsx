import Slider from "react-slick";
import {Container} from "react-bootstrap";
import {useState} from "react";

import "../../../assets/styles/index.css";
import "./_Slider/simpleSlider.scss";
import {topSellingItems} from "./_Slider/simpleSlider.data";
import {NavLink} from "react-router-dom";
import Product from "../_Product";

function NewProduct({name}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    };

    let itemsData = []

    const [isLoaded, setIsLoaded] = useState(0);

    if (isLoaded === 1) {
        return (
            <div style={{marginTop: "40px"}}>
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
                        {topSellingItems.map((topSellingItem) => (
                            <Product product={{
                                id: topSellingItem.id,
                                name: topSellingItem.names,
                                image: topSellingItem.img,
                                price: topSellingItem.price,
                                oldprice: topSellingItem.oldprice,
                                category: topSellingItem.category,
                            }} key={topSellingItem.key}/>
                        ))}
                    </Slider>
                </Container>
            </div>
        );
    } else {
        async function logJSONData() {
            const response = await fetch("http://example.com/movies.json");
            const jsonData = await response.json();
            itemsData = jsonData;//Заменить таймаут на API и в рендере заменить название массива на itemsData
            // setIsLoaded(1)
        }

        setTimeout(() => {
            setIsLoaded(1)
        }, 5000)

        return (
            <div style={{marginTop: "40px"}}>
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
                </Container>
            </div>
        );
    }
}

export default NewProduct;
