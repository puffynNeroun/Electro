import {useState, useEffect} from "react";
import {Col, Row} from "react-bootstrap";
import "./slider.css";
import './TopSellingTwo.scss'
import {topSellingTwo2SlidesItems, topSellingTwo2SlidesItems2, topSellingTwo2SlidesItems3} from "../_TopSelling/_Slider/simpleSlider.data";
import {NavLink} from "react-router-dom";

const Test = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const handlePrevSlide = () => {
        setActiveSlide((prev) => (prev === 0 ? 2 : prev - 1));
    };
    const handleNextSlide = () => {
        setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
        }, 3100);
        return () => clearInterval(interval);
    }, []);

    const [data, setData] = useState([]);

    useEffect(() => {
        const delay = 5000; // 5 seconds delay

        const timeoutId = setTimeout(() => {
            fetch('https://api.example.com/data')
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => console.error(error));
        }, delay);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <Row>
            <Col>
                <div className="slider">
                    <div className="section-title">
                        <h4 className="title">Top selling</h4>
                        <div className="section-nav">
                            <div id="slick-nav-3" className="products-slick-nav"></div>
                        </div>
                    </div>
                    <div className={`slide ${activeSlide === 0 ? "active" : ""} `}>
                        {topSellingTwo2SlidesItems.map((topSellingTwo2SlidesItem) =>
                            <div key={topSellingTwo2SlidesItem.key} className="product-widget">
                                <div className="product-img">
                                    <img src={topSellingTwo2SlidesItem.img} alt=""/>
                                </div>
                                <div className="product-body">
                                    <p className="product-category">{topSellingTwo2SlidesItem.category}</p>
                                    <h3 className="product-name"><NavLink to="/product">{topSellingTwo2SlidesItem.names}</NavLink></h3>
                                    <h4 className="product-price">{topSellingTwo2SlidesItem.price} <del
                                        className="product-old-price">{topSellingTwo2SlidesItem.oldprice}</del></h4>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={`slide ${activeSlide === 1 ? "active" : ""} `}>
                        {topSellingTwo2SlidesItems2.map((topSellingTwo2SlidesItem2) =>
                            <div key={topSellingTwo2SlidesItem2.key} className="product-widget">
                                <div className="product-img">
                                    <img src={topSellingTwo2SlidesItem2.img} alt=""/>
                                </div>
                                <div className="product-body">
                                    <p className="product-category">{topSellingTwo2SlidesItem2.category}</p>
                                    <h3 className="product-name"><NavLink to="/product">{topSellingTwo2SlidesItem2.names}</NavLink></h3>
                                    <h4 className="product-price">{topSellingTwo2SlidesItem2.price} <del
                                        className="product-old-price">{topSellingTwo2SlidesItem2.oldprice}</del></h4>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={`slide ${activeSlide === 2 ? "active" : ""} `}>
                        {topSellingTwo2SlidesItems3.map((topSellingTwo2SlidesItem3) =>
                            <div key={topSellingTwo2SlidesItem3.key} className="product-widget">
                                <div className="product-img">
                                    <img src={topSellingTwo2SlidesItem3.img} alt=""/>
                                </div>
                                <div className="product-body">
                                    <p className="product-category">{topSellingTwo2SlidesItem3.category}</p>
                                    <h3 className="product-name"><NavLink to="/product">{topSellingTwo2SlidesItem3.names}</NavLink></h3>
                                    <h4 className="product-price">{topSellingTwo2SlidesItem3.price} <del
                                        className="product-old-price">{topSellingTwo2SlidesItem3.oldprice}</del></h4>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='slick-button-block'>
                        <button className="slick-arrow slick-prev" onClick={handleNextSlide}
                                style={{position: 'static'}}></button>
                        <button className="slick-arrow slick-next" onClick={handlePrevSlide}
                                style={{position: 'static'}}></button>
                    </div>
                </div>
            </Col>
        </Row>
    );
};
export default Test;