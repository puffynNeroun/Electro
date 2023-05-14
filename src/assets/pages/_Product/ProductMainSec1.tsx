import {useState, useEffect} from "react";
import {faStar, faHeart, faShoppingCart, faExchange, faAnglesRight} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import '../../styles/index.css'
import './productMain.scss'
import {productItems} from "./productMainSec1.data";

function getQueryParam(key: string): string | null {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(key);
}


const ProductMainSec1 = () => {
    const [isLoaded, setLoaded] = useState(0)
    const [data, setData] = useState([]);

    const [activeButton, setActiveButton] = useState(0);

    const handleClick = (index) => {
        setActiveButton(index);
    };

    useEffect(() => {
        const delay = 0; // 5 seconds delay

        const timeoutId = setTimeout(() => {
            fetch(`https://api.example.com/data?productId=${getQueryParam('productId')}`)
                .then(response => response.json())
                .then((data) => {
                    setData(data);
                    setLoaded(1)
                })
                .catch(error => console.error(error));
        }, delay);
        setLoaded(1)
        return () => clearTimeout(timeoutId);
    }, []);

    if (isLoaded === 1) {
        return (
            <div>
                <div className="section">
                    {/* container */}
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            {/* Product main img */}
                            <div className="col-md-6 col-md-push-2" style={
                                {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    alignItems: "center",
                                    marginBottom: '50px'
                                }
                            }>
                                <img src={productItems.image} alt=""/>
                            </div>
                            {/* Product details */}
                            <div className="col-md-6">
                                <div className="product-details">
                                    <h2 className="product-name">{productItems.title}</h2>
                                    <div>
                                        <div className="product-rating">
                                            <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
                                        </div>
                                        <NavLink className="review-link" to="/">10 відгуків | Додайте свій
                                            відгук</NavLink>
                                    </div>
                                    <div>
                                        <h3 className="product-price">{productItems.price}
                                            <del
                                                className="product-old-price">$990.00
                                            </del>
                                        </h3>
                                        <span className="product-available">В наявності</span>
                                    </div>
                                    <p>{productItems.description}</p>

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
                                            Кількість
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
                                                                             className="fa fa-heart-o"
                                                                             style={{paddingRight: '5px'}}></FontAwesomeIcon>додати
                                            до списку бажань</NavLink></li>
                                        <li><NavLink to="/"><FontAwesomeIcon icon={faExchange}
                                                                             className="fa fa-exchange"
                                                                             style={{paddingRight: '5px'}}></FontAwesomeIcon>додати
                                            для порівняння</NavLink></li>
                                    </ul>

                                    <ul className="product-links">
                                        <li>Категорія:</li>
                                        <li><NavLink to="/">Headphones</NavLink></li>
                                        <li><NavLink to="/">Accessories</NavLink></li>
                                    </ul>


                                </div>
                            </div>
                            {/* /Product details */}

                            {/* Product tab */}
                            <div className="col-md-12">
                                <div id="product-tab">
                                    {/* product tab nav */}
                                    <ul className="tab-nav">
                                        <li onClick={() => handleClick(0)}
                                            className={activeButton === 0 ? 'active' : ''}><NavLink data-toggle="tab"
                                                                                                    to="">Опис</NavLink>
                                        </li>
                                        <li onClick={() => handleClick(1)}
                                            className={activeButton === 1 ? 'active' : ''}><NavLink data-toggle="tab"
                                                                                                    to="">Подробиці</NavLink>
                                        </li>
                                        <li onClick={() => handleClick(2)}
                                            className={activeButton === 2 ? 'active' : ''}><NavLink data-toggle="tab"
                                                                                                    to="">Відгуки
                                            (3)</NavLink></li>
                                    </ul>
                                    {/* /product tab nav */}

                                    {/* product tab content */}
                                    <div className="tab-content">
                                        {/* tab1  */}
                                        <div id="tab1" style={{display: activeButton === 0 ? 'block' : 'none'}}>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                        enim
                                                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                                        ut
                                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                        nulla
                                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                                        in
                                                        culpa qui officia deserunt mollit anim id est laborum.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /tab1  */}

                                        {/* tab2  */}
                                        <div id="tab2" style={{display: activeButton === 1 ? 'block' : 'none'}}>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                        enim
                                                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                                        ut
                                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                        nulla
                                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                                        in
                                                        culpa qui officia deserunt mollit anim id est laborum.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /tab2  */}

                                        {/* tab3  */}
                                        <div id="tab3" style={{display: activeButton === 2 ? 'block' : 'none'}}>
                                            <div className="row">
                                                {/* Rating */}
                                                <div className="col-lg-3">
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
                                                <div className="col-lg-6">
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
                                                <div className="col-lg-3">
                                                    <div id="review-form">
                                                        <form className="review-form">
                                                            <input className="input" type="text"
                                                                   placeholder="Your Name"/>
                                                            <input className="input" type="email"
                                                                   placeholder="Your Email"/>
                                                            <textarea className="input"
                                                                      placeholder="Your Review"></textarea>
                                                            <div className="input-rating">
                                                                <span>Ваш рейтинг: </span>
                                                                <div className="stars">
                                                                    <input id="star5" name="rating" value="5"
                                                                           type="radio"/><label
                                                                    htmlFor="star5"></label>
                                                                    <input id="star4" name="rating" value="4"
                                                                           type="radio"/><label
                                                                    htmlFor="star4"></label>
                                                                    <input id="star3" name="rating" value="3"
                                                                           type="radio"/><label
                                                                    htmlFor="star3"></label>
                                                                    <input id="star2" name="rating" value="2"
                                                                           type="radio"/><label
                                                                    htmlFor="star2"></label>
                                                                    <input id="star1" name="rating" value="1"
                                                                           type="radio"/><label
                                                                    htmlFor="star1"></label>
                                                                </div>
                                                            </div>
                                                            <button
                                                                className="primary-btn primary-btn__product">Надіслати
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
        )
    } else {
        return (
            <div>
                <div className="section">
                    {/* container */}
                    {/* /container */}
                </div>
            </div>
        )
    }
};

export default ProductMainSec1;