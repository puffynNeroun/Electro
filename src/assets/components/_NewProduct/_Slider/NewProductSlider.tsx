// import Slider from "react-slick";
// import { Container } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faExchange, faEye, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { NavLink } from "react-router-dom";
// import './simpleSlider.scss';
// import { sliderItems } from "./simpleSlider.data";
//
//
//
// const NewProduct = () => {
//
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//     };
//
//         return (
//
//             <div style={{marginTop: '40px'}}>
//                 <Container>
//                     <div className='section-title-nav'>
//                         <h2 className='product-title'> НОВІ ПРОДУКТИ</h2>
//                         <div className="section-nav">
//                             <ul className="section-tab-nav tab-nav">
//                                 <li className="active"><NavLink data-toggle="tab" to="#tab1">Цікаві пропозиції</NavLink></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <Slider {...settings}>
//
//
//                         {sliderItems.map((sliderItem) =>
//                             <div key={sliderItem.key} className="product slick-slide slick-current slick-active">
//                                 <div className="product-img">
//                                     <img src={sliderItem.img} alt=""/>
//                                     <div className="product-label">
//                                         <span className="new">НОВИЙ</span>
//                                     </div>
//                                 </div>
//                                 <div className="product-body">
//                                     <p className="product-category">{sliderItem.category}</p>
//                                     <h3 className="product-name"><NavLink to="/product">{sliderItem.names}</NavLink></h3>
//                                     <h4 className="product-price">{sliderItem.price}<del className="product-old-price">{sliderItem.oldprice}</del></h4>
//                                     <div className="product-rating">
//                                         <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
//                                         <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
//                                         <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
//                                         <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
//                                         <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
//                                     </div>
//                                     <div className="product-btns">
//                                         <button className="add-to-wishlist" style={{right: 0}}>
//                                             <FontAwesomeIcon icon={faHeart} className="fa fa-heart-o" style={{width: '15px'}}/>
//                                             <span className="tooltipp">додати до списку бажань</span>
//                                         </button>
//                                         <button className="add-to-compare">
//                                             <FontAwesomeIcon icon={faExchange} className="fa fa-exchange" style={{width: '15px'}}/>
//                                             <span className="tooltipp">додати для порівняння</span>
//                                         </button>
//                                         <button className="quick-view">
//                                             <FontAwesomeIcon icon={faEye} className="fa fa-eye" style={{width: '15px'}}/>
//                                             <span className="tooltipp">швидкий перегляд</span>
//                                         </button>
//                                     </div>
//                                 </div>
//                                 <div className="add-to-cart" style={{paddingTop: '38px'}}>
//                                     <button className="add-to-cart-btn" style={{fontSize: "inherit"}}>
//                                         <FontAwesomeIcon icon={faShoppingCart} className="fa fa-shopping-cart"/>
//                                         <NavLink to={'/'} className='add-to-cart-btn-link'>додати в кошик</NavLink>
//                                     </button>
//                                 </div>
//                             </div>
//                         )}
//                     </Slider>
//                 </Container>
//             </div>
//         );
//
// }
//
// export default NewProduct;
