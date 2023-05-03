import {useState, useEffect} from "react";
import "./slider.css";
import {Col, Row} from "react-bootstrap";

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
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <Row>
            <Col>
                <div className="slider">
                    <div className={`slide ${activeSlide === 0 ? "active" : ""} `}><img
                        src="https://i.imgur.com/iF1QVQk.png" alt=""
                    /> <img
                        src="https://i.imgur.com/T6DLASb.png" alt=""
                    /> <img
                        src="https://i.imgur.com/T6DLASb.png" alt=""
                    /></div>
                    <div className={`slide ${activeSlide === 1 ? "active" : ""}`}><img
                        src="https://i.imgur.com/T6DLASb.png" alt=""
                    /> <img
                        src="https://i.imgur.com/iF1QVQk.png" alt=""
                    /> <img
                        src="https://i.imgur.com/iF1QVQk.png" alt=""
                    /></div>
                    <div
                        className={`slide ${activeSlide === 2 ? "active" : ""}`}>                {/* Ваш контент для третьего слайда */}
                        <img src="https://i.imgur.com/iF1QVQk.png"
                             alt=""/>
                        <img src="https://i.imgur.com/iF1QVQk.png"
                             alt=""/>
                        <img src="https://i.imgur.com/iF1QVQk.png"
                             alt=""/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'flex-end', position: 'relative'}}>
                        <button className="slick-arrow slick-prev" onClick={handleNextSlide} style={{position: 'static'}}></button>
                        <button className="slick-arrow slick-next" onClick={handlePrevSlide} style={{position: 'static'}}></button>
                    </div>
                </div>
            </Col>
        </Row>
    );
};
export default Test;