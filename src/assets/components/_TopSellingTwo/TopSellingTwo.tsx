import {useState, useEffect} from "react";
import {Col, Row} from "react-bootstrap";
import "./slider.css";
import './TopSellingTwo.scss'
import {topSellingTwoSlidesItems, topSellingTwoSlidesItems2, topSellingTwoSlidesItems3} from "../_TopSelling/_Slider/simpleSlider.data";
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
        const delay = 0; // 5 seconds delay

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
                        {topSellingTwoSlidesItems.map((topSellingTwoSlidesItem) =>
                            <div key={topSellingTwoSlidesItem.key} className="product-widget">
                                <div className="product-img">
                                    <img src={topSellingTwoSlidesItem.img} alt=""/>
                                </div>
                                <div className="product-body">
                                    <p className="product-category">{topSellingTwoSlidesItem.category}</p>
                                    <h3 className="product-name"><NavLink to="/product">{topSellingTwoSlidesItem.names}</NavLink></h3>
                                    <h4 className="product-price">{topSellingTwoSlidesItem.price} <del
                                        className="product-old-price">{topSellingTwoSlidesItem.oldprice}</del></h4>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={`slide ${activeSlide === 1 ? "active" : ""} `}>
                        {topSellingTwoSlidesItems2.map((topSellingTwoSlidesItem2) =>
                            <div key={topSellingTwoSlidesItem2.key} className="product-widget">
                                <div className="product-img">
                                    <img src={topSellingTwoSlidesItem2.img} alt=""/>
                                </div>
                                <div className="product-body">
                                    <p className="product-category">{topSellingTwoSlidesItem2.category}</p>
                                    <h3 className="product-name"><NavLink to="/product">{topSellingTwoSlidesItem2.names}</NavLink></h3>
                                    <h4 className="product-price">{topSellingTwoSlidesItem2.price} <del
                                        className="product-old-price">{topSellingTwoSlidesItem2.oldprice}</del></h4>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={`slide ${activeSlide === 2 ? "active" : ""} `}>
                        {topSellingTwoSlidesItems3.map((topSellingTwoSlidesItem3) =>
                            <div key={topSellingTwoSlidesItem3.key} className="product-widget">
                                <div className="product-img">
                                    <img src={topSellingTwoSlidesItem3.img} alt=""/>
                                </div>
                                <div className="product-body">
                                    <p className="product-category">{topSellingTwoSlidesItem3.category}</p>
                                    <h3 className="product-name"><NavLink to="/product">{topSellingTwoSlidesItem3.names}</NavLink></h3>
                                    <h4 className="product-price">{topSellingTwoSlidesItem3.price} <del
                                        className="product-old-price">{topSellingTwoSlidesItem3.oldprice}</del></h4>
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