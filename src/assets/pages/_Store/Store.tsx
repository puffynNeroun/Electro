import 'bootstrap/dist/css/bootstrap-grid.min.css'
import '../../styles/index.css'
import './store.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExchange, faEye, faHeart, faShoppingCart, faStar, faTh, faAnglesRight} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {storeProducts, storeAsides} from "./store.data";
import SingUp from "../../components/_SingUp/SingUp";


const Store = () => {
    return (
        <div>
            {/*BREADCRUMB*/}
            <div id="breadcrumb" className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="breadcrumb-tree">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="">All Categories</NavLink></li>
                                <li><NavLink to="">Accessories</NavLink></li>
                                <li className="active">Headphones (227,490 Results)</li>
                            </ul>
                        </div>
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>
            {/* /BREADCRUMB */}

            {/* SECTION */}
            <div className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                        {/* ASIDE */}
                        <div id="aside" className="col-md-3">
                            {/* aside Widget */}
                            <div className="aside">
                                <h3 className="aside-title">Categories</h3>
                                <div className="checkbox-filter">

                                    <div className="input-checkbox">
                                        <input type="checkbox" id="category-1"/>
                                        <label htmlFor="category-1">
                                            <span></span>
                                            Laptops
                                            <small>(120)</small>
                                        </label>
                                    </div>

                                    <div className="input-checkbox">
                                        <input type="checkbox" id="category-2"/>
                                        <label htmlFor="category-2">
                                            <span></span>
                                            Smartphones
                                            <small>(740)</small>
                                        </label>
                                    </div>

                                    <div className="input-checkbox">
                                        <input type="checkbox" id="category-3"/>
                                        <label htmlFor="category-3">
                                            <span></span>
                                            Cameras
                                            <small>(1450)</small>
                                        </label>
                                    </div>

                                    <div className="input-checkbox">
                                        <input type="checkbox" id="category-4"/>
                                        <label htmlFor="category-4">
                                            <span></span>
                                            Accessories
                                            <small>(578)</small>
                                        </label>
                                    </div>

                                    <div className="input-checkbox">
                                        <input type="checkbox" id="category-5"/>
                                        <label htmlFor="category-5">
                                            <span></span>
                                            Laptops
                                            <small>(120)</small>
                                        </label>
                                    </div>

                                    <div className="input-checkbox">
                                        <input type="checkbox" id="category-6"/>
                                        <label htmlFor="category-6">
                                            <span></span>
                                            Smartphones
                                            <small>(740)</small>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* /aside Widget */}

                            {/* aside Widget */}
                            <div className="aside">
                                <h3 className="aside-title">Price</h3>
                                <div className="price-filter">
                                    <div id="price-slider"></div>
                                    <div className="input-number price-min">
                                        <input id="price-min" type="number"/>
                                        <span className="qty-up">+</span>
                                        <span className="qty-down">-</span>
                                    </div>
                                    <span>-</span>
                                    <div className="input-number price-max">
                                        <input id="price-max" type="number"/>
                                        <span className="qty-up">+</span>
                                        <span className="qty-down">-</span>
                                    </div>
                                </div>
                            </div>
                            {/* /aside Widget */}

                            {/* aside Widget */}
                            <div className="aside">
                                <h3 className="aside-title">Brand</h3>
                                <div className="checkbox-filter">
                                    <div className="input-checkbox">
                                        <input type="checkbox" id="brand-1"/>
                                        <label htmlFor="brand-1">
                                            <span></span>
                                            SAMSUNG
                                            <small>(578)</small>
                                        </label>
                                    </div>
                                    <div className="input-checkbox">
                                        <input type="checkbox" id="brand-2"/>
                                        <label htmlFor="brand-2">
                                            <span></span>
                                            LG
                                            <small>(125)</small>
                                        </label>
                                    </div>
                                    <div className="input-checkbox">
                                        <input type="checkbox" id="brand-3"/>
                                        <label htmlFor="brand-3">
                                            <span></span>
                                            SONY
                                            <small>(755)</small>
                                        </label>
                                    </div>
                                    <div className="input-checkbox">
                                        <input type="checkbox" id="brand-4"/>
                                        <label htmlFor="brand-4">
                                            <span></span>
                                            SAMSUNG
                                            <small>(578)</small>
                                        </label>
                                    </div>
                                    <div className="input-checkbox">
                                        <input type="checkbox" id="brand-5"/>
                                        <label htmlFor="brand-5">
                                            <span></span>
                                            LG
                                            <small>(125)</small>
                                        </label>
                                    </div>
                                    <div className="input-checkbox">
                                        <input type="checkbox" id="brand-6"/>
                                        <label htmlFor="brand-6">
                                            <span></span>
                                            SONY
                                            <small>(755)</small>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* /aside Widget */}

                            {/* aside Widget */}
                            <div className="aside">
                                <h3 className="aside-title">Top selling</h3>
                                {storeAsides.map((storeAside) =>
                                    <div key={storeAside.key} className="product-widget">
                                        <div className="product-img">
                                            <img src={storeAside.img} alt=""/>
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category">{storeAside.category}</p>
                                            <h3 className="product-name"><NavLink
                                                to="/product">{storeAside.names}</NavLink></h3>
                                            <h4 className="product-price">{storeAside.price}
                                                <del
                                                    className="product-old-price">{storeAside.oldprice}</del>
                                            </h4>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/* /aside Widget */}
                        </div>
                        {/* /ASIDE */}

                        {/* STORE */}
                        <div id="store" className="col-md-9">
                            {/* store top filter */}
                            <div className="store-filter clearfix">
                                <div className="store-sort">
                                    <label>
                                        Sort By:
                                        <select className="input-select">
                                            <option value="0">Popular</option>
                                            <option value="1">Position</option>
                                        </select>
                                    </label>

                                    <label>
                                        Show:
                                        <select className="input-select">
                                            <option value="0">20</option>
                                            <option value="1">50</option>
                                        </select>
                                    </label>
                                </div>
                                <ul className="store-grid">
                                    <li className="active"><FontAwesomeIcon icon={faTh}
                                                                            className="fa fa-th"></FontAwesomeIcon></li>
                                </ul>
                            </div>
                            {/* /store top filter */}

                            {/* store products */}
                            <div className="row">
                                {/* product */}
                                {storeProducts.map((storeProduct) =>
                                    <div key={storeProduct.key} className="col-md-4 col-xs-6">
                                        <div className="product product-store">
                                            <div className="product-img">
                                                <img src={storeProduct.img} alt=""/>
                                            </div>
                                            <div className="product-body">
                                                <p className="product-category">{storeProduct.category}</p>
                                                <h3 className="product-name"><NavLink to="/product">{storeProduct.names}</NavLink></h3>
                                                <h4 className="product-price">{storeProduct.price}
                                                    <del
                                                        className="product-old-price">{storeProduct.oldprice}</del>
                                                </h4>
                                                <div className="product-rating">
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
                                                <div className="product-btns">
                                                    <button className="add-to-wishlist" style={{right: 0}}>
                                                        <FontAwesomeIcon icon={faHeart}
                                                                         className="fa fa-heart-o"
                                                                         style={{width: '15px'}}/><span
                                                        className="tooltipp">add to wishlist</span></button>
                                                    <button className="add-to-compare"><FontAwesomeIcon
                                                        icon={faExchange}
                                                        className="fa fa-exchange"
                                                        style={{width: '15px'}}/><span
                                                        className="tooltipp">add to compare</span></button>
                                                    <button className="quick-view"><FontAwesomeIcon icon={faEye}
                                                                                                    className="fa fa-eye"
                                                                                                    style={{width: '15px'}}/><span
                                                        className="tooltipp">quick view</span></button>
                                                </div>
                                            </div>
                                            <div className="add-to-cart add-to-cart__product__btn"
                                                 style={{paddingTop: '38px'}}>
                                                <button className="add-to-cart-btn" style={{fontSize: "inherit"}}>
                                                    <FontAwesomeIcon
                                                        icon={faShoppingCart}
                                                        className="fa fa-shopping-cart"/> <NavLink to={'/'}
                                                                                                   className='add-to-cart-btn-link'> add
                                                    to
                                                    cart</NavLink>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/* /store products */}

                            {/* store bottom filter */}
                            <div className="store-filter clearfix">
                                <ul className="store-pagination">
                                    <li className="active">1</li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faAnglesRight} className="fa fa-angle-right"></FontAwesomeIcon></a></li>
                                </ul>
                            </div>
                            {/* /store bottom filter */}
                        </div>
                        {/* /STORE */}
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>
            {/* /SECTION */}
            <SingUp/>
        </div>
    );
};

export default Store;