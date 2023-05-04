// import {useState, useEffect} from "react";
// import {Col, Row} from "react-bootstrap";
// import "./slider.css";
//
// import product07 from '../../img/product07.png'
// // import product08 from '../../img/product08.png'
// // import product09 from '../../img/product09.png'
// // import product01 from '../../img/product01.png'
// // import product02 from '../../img/product02.png'
// // import product03 from '../../img/product03.png'
// // import product04 from '../../img/product04.png'
// // import product05 from '../../img/product05.png'
// // import product06 from '../../img/product06.png'
//
// const Test = () => {
//     const [activeSlide, setActiveSlide] = useState(0);
//     const handlePrevSlide = () => {
//         setActiveSlide((prev) => (prev === 0 ? 2 : prev - 1));
//     };
//     const handleNextSlide = () => {
//         setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
//     };
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
//         }, 3000);
//         return () => clearInterval(interval);
//     }, []);
//     return (
//         <Row>
//             <Col>
//                 <div className="slider">
//                     <div className="section-title">
//                         <h4 className="title">Top selling</h4>
//                         <div className="section-nav">
//                             <div id="slick-nav-3" className="products-slick-nav"></div>
//                         </div>
//                     </div>
//                     <div className={`slide ${activeSlide === 0 ? "active" : ""} `}>
//                         <div className="product-widget">
//                             <div className="product-img">
//                                 <img src={product07} alt=""/>
//                             </div>
//                             <div className="product-body">
//                                 <p className="product-category">Category</p>
//                                 <h3 className="product-name"><a href="#">product name goes here</a></h3>
//                                 <h4 className="product-price">$980.00 <del
//                                     className="product-old-price">$990.00</del></h4>
//                             </div>
//                         </div>
//                         <div className="product-widget">
//                             <div className="product-img">
//                                 <img src={product07} alt=""/>
//                             </div>
//                             <div className="product-body">
//                                 <p className="product-category">Category</p>
//                                 <h3 className="product-name"><a href="#">product name goes here</a></h3>
//                                 <h4 className="product-price">$980.00 <del
//                                     className="product-old-price">$990.00</del></h4>
//                             </div>
//                         </div>
//                         <div className="product-widget">
//                             <div className="product-img">
//                                 <img src={product07} alt=""/>
//                             </div>
//                             <div className="product-body">
//                                 <p className="product-category">Category</p>
//                                 <h3 className="product-name"><a href="#">product name goes here</a></h3>
//                                 <h4 className="product-price">$980.00 <del
//                                     className="product-old-price">$990.00</del></h4>
//                             </div>
//                         </div>
//                     </div>
//                     <div className={`slide ${activeSlide === 1 ? "active" : ""}`}>
//                         <div className="product-widget">
//                             <div className="product-img">
//                                 <img src={product07} alt=""/>
//                             </div>
//                             <div className="product-body">
//                                 <p className="product-category">Category</p>
//                                 <h3 className="product-name"><a href="#">product name goes here</a></h3>
//                                 <h4 className="product-price">$980.00 <del
//                                     className="product-old-price">$990.00</del></h4>
//                             </div>
//                         </div>
//                         <div className="product-widget">
//                             <div className="product-img">
//                                 <img src={product07} alt=""/>
//                             </div>
//                             <div className="product-body">
//                                 <p className="product-category">Category</p>
//                                 <h3 className="product-name"><a href="#">product name goes here</a></h3>
//                                 <h4 className="product-price">$980.00 <del
//                                     className="product-old-price">$990.00</del></h4>
//                             </div>
//                         </div>
//                         <div className="product-widget">
//                             <div className="product-img">
//                                 <img src={product07} alt=""/>
//                             </div>
//                             <div className="product-body">
//                                 <p className="product-category">Category</p>
//                                 <h3 className="product-name"><a href="#">product name goes here</a></h3>
//                                 <h4 className="product-price">$980.00 <del
//                                     className="product-old-price">$990.00</del></h4>
//                             </div>
//                         </div>
//                     </div>
//                     <div
//                         className={`slide ${activeSlide === 2 ? "active" : ""}`}>                {/* Ваш контент для третьего слайда */}
//                         <div className="product-widget">
//                             <div className="product-img">
//                                 <img src={product07} alt=""/>
//                             </div>
//                             <div className="product-body">
//                                 <p className="product-category">Category</p>
//                                 <h3 className="product-name"><a href="#">product name goes here</a></h3>
//                                 <h4 className="product-price">$980.00 <del
//                                     className="product-old-price">$990.00</del></h4>
//                             </div>
//                         </div>
//                         <div className="product-widget">
//                             <div className="product-img">
//                                 <img src={product07} alt=""/>
//                             </div>
//                             <div className="product-body">
//                                 <p className="product-category">Category</p>
//                                 <h3 className="product-name"><a href="#">product name goes here</a></h3>
//                                 <h4 className="product-price">$980.00 <del
//                                     className="product-old-price">$990.00</del></h4>
//                             </div>
//                         </div>
//                         <div className="product-widget">
//                             <div className="product-img">
//                                 <img src={product07} alt=""/>
//                             </div>
//                             <div className="product-body">
//                                 <p className="product-category">Category</p>
//                                 <h3 className="product-name"><a href="#">product name goes here</a></h3>
//                                 <h4 className="product-price">$980.00 <del
//                                     className="product-old-price">$990.00</del></h4>
//                             </div>
//                         </div>
//                     </div>
//                     <div style={{display: 'flex', justifyContent: 'flex-end', position: 'relative'}}>
//                         <button className="slick-arrow slick-prev" onClick={handleNextSlide} style={{position: 'static'}}></button>
//                         <button className="slick-arrow slick-next" onClick={handlePrevSlide} style={{position: 'static'}}></button>
//                     </div>
//                 </div>
//             </Col>
//         </Row>
//     );
// };
// export default Test;