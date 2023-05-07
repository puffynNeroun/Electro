import product01 from './img/product01.png'
import product03 from './img/product03.png'
import product06 from './img/product06.png'
import product08 from './img/product08.png'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import '../../styles/index.css'
import './productMain.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {faExchange} from "@fortawesome/free-solid-svg-icons";
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

const ProductMainSec1 = () => {
    return (
        <div>
            <div className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                        {/* Product main img */}
                        <div className="col-md-5 col-md-push-2">
                            <div id="product-main-img">
                                <div className="product-preview">
                                    <img src={product01} alt=""/>
                                </div>

                                <div className="product-preview">
                                    <img src={product03} alt=""/>
                                </div>

                                <div className="product-preview">
                                    <img src={product06} alt=""/>
                                </div>

                                <div className="product-preview">
                                    <img src={product08} alt=""/>
                                </div>
                            </div>
                        </div>
                        {/* /Product main img */}

                        {/* Product thumb imgs */}
                        <div className="col-md-2  col-md-pull-5">
                            <div id="product-imgs">
                                <div className="product-preview">
                                    <img src={product01} alt=""/>
                                </div>

                                <div className="product-preview">
                                    <img src={product03} alt=""/>
                                </div>

                                <div className="product-preview">
                                    <img src={product06} alt=""/>
                                </div>

                                <div className="product-preview">
                                    <img src={product08} alt=""/>
                                </div>
                            </div>
                        </div>
                        {/* /Product thumb imgs */}

                        {/* Product details */}
                        <div className="col-md-5">
                            <div className="product-details">
                                <h2 className="product-name">тут вказується назва продукту</h2>
                                <div>
                                    <div className="product-rating">
                                        <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
                                    </div>
                                    <NavLink className="review-link" to="/">10 відгуків | Додайте свій відгук</NavLink>
                                </div>
                                <div>
                                    <h3 className="product-price">$980.00 <del
                                        className="product-old-price">$990.00</del></h3>
                                    <span className="product-available">В наявності</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                <div className="product-options">
                                    <label>
                                        Розмір
                                        <select className="input-select">
                                            <option value="0">X</option>
                                        </select>
                                    </label>
                                    <label>
                                        Колір
                                        <select className="input-select">
                                            <option value="0">Червоний</option>
                                        </select>
                                    </label>
                                </div>

                                <div className="add-to-cart add-to-cart__product">
                                    <div className="qty-label">
                                        Rількість
                                        <div className="input-number">
                                            <input type="number"/>
                                            <span className="qty-up">+</span>
                                            <span className="qty-down">-</span>
                                        </div>
                                    </div>
                                    <button className="add-to-cart-btn add-to-cart-btn__product"><FontAwesomeIcon
                                        icon={faShoppingCart}
                                        className="fa fa-shopping-cart"></FontAwesomeIcon> додати в кошик
                                    </button>
                                </div>

                                <ul className="product-main-btns">
                                    <li><NavLink to="/"><FontAwesomeIcon icon={faHeart}
                                                                         className="fa fa-heart-o"></FontAwesomeIcon>додати
                                        до списку бажань</NavLink></li>
                                    <li><NavLink to="/"><FontAwesomeIcon icon={faExchange}
                                                                         className="fa fa-exchange"></FontAwesomeIcon>додати
                                        для порівняння</NavLink></li>
                                </ul>

                                <ul className="product-links">
                                    <li>Категорія:</li>
                                    <li><NavLink to="/">Headphones</NavLink></li>
                                    <li><NavLink to="/">Accessories</NavLink></li>
                                </ul>

                                <ul className="product-links">
                                    <li>Share:</li>
                                    <li><NavLink to="/"><i className="fa fa-facebook"></i></NavLink></li>
                                    <li><NavLink to="/"><i className="fa fa-twitter"></i></NavLink></li>
                                    <li><NavLink to="/"><i className="fa fa-google-plus"></i></NavLink></li>
                                    <li><NavLink to="/"><i className="fa fa-envelope"></i></NavLink></li>
                                </ul>

                            </div>
                        </div>
                        {/* /Product details */}

                        {/* Product tab */}
                        <div className="col-md-12">
                            <div id="product-tab">
                                {/* product tab nav */}
                                <ul className="tab-nav">
                                    <li className="active"><NavLink data-toggle="tab" to="">Опис</NavLink></li>
                                    <li><NavLink data-toggle="tab" to="">Подробиці</NavLink></li>
                                    <li><NavLink data-toggle="tab" to="">Відгуки (3)</NavLink></li>
                                </ul>
                                {/* /product tab nav */}

                                {/* product tab content */}
                                <div className="tab-content">
                                    {/* tab1  */}
                                    <div id="tab1" className="tab-pane fade in tab-pane-fade-in-active">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /tab1  */}

                                    {/* tab2  */}
                                    <div id="tab2" className="tab-pane fade in">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /tab2  */}

                                    {/* tab3  */}
                                    <div id="tab3" className="tab-pane fade in ">
                                        <div className="row">
                                            {/* Rating */}
                                            <div className="col-md-3">
                                                <div id="rating">
                                                    <div className="rating-avg">
                                                        <span>4.5</span>
                                                        <div className="rating-stars">
                                                            <FontAwesomeIcon icon={faStar}
                                                                             className="fa fa-star"></FontAwesomeIcon>
                                                            <FontAwesomeIcon icon={faStar}
                                                                             className="fa fa-star"></FontAwesomeIcon>
                                                            <FontAwesomeIcon icon={faStar}
                                                                             className="fa fa-star"></FontAwesomeIcon>
                                                            <FontAwesomeIcon icon={faStar}
                                                                             className="fa fa-star"></FontAwesomeIcon>
                                                            <FontAwesomeIcon icon={faStar}
                                                                             className="fa fa-star"></FontAwesomeIcon>
                                                        </div>
                                                    </div>
                                                    <ul className="rating">
                                                        <li>
                                                            <div className="rating-stars">
                                                                <FontAwesomeIcon icon={faStar}
                                                                                 className="fa fa-star"></FontAwesomeIcon>
                                                                <FontAwesomeIcon icon={faStar}
                                                                                 className="fa fa-star"></FontAwesomeIcon>
                                                                <FontAwesomeIcon icon={faStar}
                                                                                 className="fa fa-star"></FontAwesomeIcon>
                                                                <FontAwesomeIcon icon={faStar}
                                                                                 className="fa fa-star"></FontAwesomeIcon>
                                                                <FontAwesomeIcon icon={faStar}
                                                                                 className="fa fa-star"></FontAwesomeIcon>
                                                            </div>
                                                            <div className="rating-progress">
                                                                <div style={{width: '80%'}}></div>
                                                            </div>
                                                            <span className="sum">3</span>
                                                        </li>
                                                        <li>
                                                            <div className="rating-stars">
                                                                <FontAwesomeIcon icon={faStar}
                                                                                 className="fa fa-star"></FontAwesomeIcon>
                                                                <FontAwesomeIcon icon={faStar}
                                                                                 className="fa fa-star"></FontAwesomeIcon>
                                                                <FontAwesomeIcon icon={faStar}
                                                                                 className="fa fa-star"></FontAwesomeIcon>
                                                                <FontAwesomeIcon icon={faStar}
                                                                                 className="fa fa-star"></FontAwesomeIcon>
                                                            </div>
                                                            <div className="rating-progress">
                                                                <div style={{width: '60%'}}></div>
                                                            </div>
                                                            <span className="sum">2</span>
                                                        </li>
                                                        <li>
                                                            <div className="rating-stars">
                                                                <FontAwesomeIcon icon={faStar}
                                                                                 className="fa fa-star"></FontAwesomeIcon>
                                                                <FontAwesomeIcon icon={faStar}
                                                                                 className="fa fa-star"></FontAwesomeIcon>
                                                                <FontAwesomeIcon icon={faStar}
                                                                                 className="fa fa-star"></FontAwesomeIcon>
                                                            </div>
                                                            <div className="rating-progress">
                                                                <div></div>
                                                            </div>
                                                            <span className="sum">0</span>
                                                        </li>
                                                        <li>
                                                            <div className="rating-stars">
                                                                <FontAwesomeIcon icon={faStar}
                                                                                 className="fa fa-star"></FontAwesomeIcon>
                                                                <FontAwesomeIcon icon={faStar}
                                                                                 className="fa fa-star"></FontAwesomeIcon>
                                                            </div>
                                                            <div className="rating-progress">
                                                                <div></div>
                                                            </div>
                                                            <span className="sum">0</span>
                                                        </li>
                                                        <li>
                                                            <div className="rating-stars">
                                                                <FontAwesomeIcon icon={faStar}
                                                                                 className="fa fa-star"></FontAwesomeIcon>
                                                            </div>
                                                            <div className="rating-progress">
                                                                <div></div>
                                                            </div>
                                                            <span className="sum">0</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* /Rating */}

                                            {/* Reviews */}
                                            <div className="col-md-6">
                                                <div id="reviews">
                                                    <ul className="reviews">
                                                        <li>
                                                            <div className="review-heading">
                                                                <h5 className="name">Микола</h5>
                                                                <p className="date">07.05.2023, 13:03 GMT+3</p>
                                                                <div className="review-rating">
                                                                    <FontAwesomeIcon icon={faStar}
                                                                                     className="fa fa-star"></FontAwesomeIcon>
                                                                    <FontAwesomeIcon icon={faStar}
                                                                                     className="fa fa-star"></FontAwesomeIcon>
                                                                    <FontAwesomeIcon icon={faStar}
                                                                                     className="fa fa-star"></FontAwesomeIcon>
                                                                    <FontAwesomeIcon icon={faStar}
                                                                                     className="fa fa-star"></FontAwesomeIcon>
                                                                    <FontAwesomeIcon icon={faStar}
                                                                                     className="fa fa-star"></FontAwesomeIcon>
                                                                </div>
                                                            </div>
                                                            <div className="review-body">
                                                                <p>Мені дуже сподобалося, відмінна якість</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="review-heading">
                                                                <h5 className="name">Данило</h5>
                                                                <p className="date">05.05.2023, 9:21 GMT+3</p>
                                                                <div className="review-rating">
                                                                    <FontAwesomeIcon icon={faStar}
                                                                                     className="fa fa-star"></FontAwesomeIcon>
                                                                    <FontAwesomeIcon icon={faStar}
                                                                                     className="fa fa-star"></FontAwesomeIcon>
                                                                    <FontAwesomeIcon icon={faStar}
                                                                                     className="fa fa-star"></FontAwesomeIcon>
                                                                    <FontAwesomeIcon icon={faStar}
                                                                                     className="fa fa-star"></FontAwesomeIcon>
                                                                    <FontAwesomeIcon icon={faStar}
                                                                                     className="fa fa-star"></FontAwesomeIcon>
                                                                </div>
                                                            </div>
                                                            <div className="review-body">
                                                                <p>Супер, я задоволений</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="review-heading">
                                                                <h5 className="name">Іван</h5>
                                                                <p className="date">06.04.2023, 16:43 GMT+3</p>
                                                                <div className="review-rating">
                                                                    <FontAwesomeIcon icon={faStar}
                                                                                     className="fa fa-star"></FontAwesomeIcon>
                                                                    <FontAwesomeIcon icon={faStar}
                                                                                     className="fa fa-star"></FontAwesomeIcon>
                                                                    <FontAwesomeIcon icon={faStar}
                                                                                     className="fa fa-star"></FontAwesomeIcon>
                                                                    <FontAwesomeIcon icon={faStar}
                                                                                     className="fa fa-star"></FontAwesomeIcon>
                                                                    <FontAwesomeIcon icon={faStar}
                                                                                     className="fa fa-star"></FontAwesomeIcon>
                                                                </div>
                                                            </div>
                                                            <div className="review-body">
                                                                <p>Все добре, але доставка прийшла невчасно</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <ul className="reviews-pagination">
                                                        <li className="active">1</li>
                                                        <li><NavLink to="">2</NavLink></li>
                                                        <li><NavLink to="">3</NavLink></li>
                                                        <li><NavLink to="">4</NavLink></li>
                                                        <li><NavLink to=""><FontAwesomeIcon icon={faAnglesRight}
                                                                                            className="fa fa-angle-right"></FontAwesomeIcon></NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* /Reviews */}

                                            {/* Review Form */}
                                            <div className="col-md-3">
                                                <div id="review-form">
                                                    <form className="review-form">
                                                        <input className="input" type="text" placeholder="Your Name"/>
                                                        <input className="input" type="email" placeholder="Your Email"/>
                                                        <textarea className="input"
                                                                  placeholder="Your Review"></textarea>
                                                        <div className="input-rating">
                                                            <span>Ваш рейтинг: </span>
                                                            <div className="stars">
                                                                <input id="star5" name="rating" value="5" type="radio"/><label
                                                                htmlFor="star5"></label>
                                                                <input id="star4" name="rating" value="4" type="radio"/><label
                                                                htmlFor="star4"></label>
                                                                <input id="star3" name="rating" value="3" type="radio"/><label
                                                                htmlFor="star3"></label>
                                                                <input id="star2" name="rating" value="2" type="radio"/><label
                                                                htmlFor="star2"></label>
                                                                <input id="star1" name="rating" value="1" type="radio"/><label
                                                                htmlFor="star1"></label>
                                                            </div>
                                                        </div>
                                                        <button className="primary-btn primary-btn__product">Надіслати
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                            {/* /Review Form */}
                                        </div>
                                    </div>
                                    {/* /tab3  */}
                                </div>
                                {/* /product tab content  */}
                            </div>
                        </div>
                        {/* /product tab */}
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>
        </div>
    );
};

export default ProductMainSec1;