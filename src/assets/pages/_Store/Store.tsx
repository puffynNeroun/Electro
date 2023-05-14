import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTh, faAnglesRight} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {storeProducts, storeAsides} from "./store.data";
import SingUp from "../../components/_SingUp/SingUp";
import PriceRangeSlider from "./PriseRangeSlider";
import Product from "../../components/_Product";

import 'bootstrap/dist/css/bootstrap-grid.min.css'
import '../../styles/index.css'
import './store.scss'
import "../../../assets/styles/index.css";
import {useEffect, useState} from "react";

const Store = () => {

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
        <div>
            {/*BREADCRUMB*/}
            <div id="breadcrumb" className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="breadcrumb-tree">
                                <li><NavLink to="/">Головна</NavLink></li>
                                <li><NavLink to="">Всі категорії</NavLink></li>
                                <li><NavLink to="">Магазин</NavLink></li>
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
                                <h3 className="aside-title">Категорії</h3>
                                <div className="checkbox-filter">

                                    <div className="input-checkbox">
                                        <input type="checkbox" id="category-1"/>
                                        <label htmlFor="category-1">
                                            <span></span>
                                            Холодильники
                                            <small>(120)</small>
                                        </label>
                                    </div>

                                    <div className="input-checkbox">
                                        <input type="checkbox" id="category-2"/>
                                        <label htmlFor="category-2">
                                            <span></span>
                                            Пральні машини
                                            <small>(740)</small>
                                        </label>
                                    </div>

                                    <div className="input-checkbox">
                                        <input type="checkbox" id="category-3"/>
                                        <label htmlFor="category-3">
                                            <span></span>
                                            Кухонні плити
                                            <small>(1450)</small>
                                        </label>
                                    </div>

                                    <div className="input-checkbox">
                                        <input type="checkbox" id="category-4"/>
                                        <label htmlFor="category-4">
                                            <span></span>
                                            Аксесуари до ВПТ
                                            <small>(578)</small>
                                        </label>
                                    </div>

                                    <div className="input-checkbox">
                                        <input type="checkbox" id="category-5"/>
                                        <label htmlFor="category-5">
                                            <span></span>
                                            Сушильні машини
                                            <small>(120)</small>
                                        </label>
                                    </div>

                                    <div className="input-checkbox">
                                        <input type="checkbox" id="category-6"/>
                                        <label htmlFor="category-6">
                                            <span></span>
                                            Пилососи
                                            <small>(740)</small>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* /aside Widget */}

                            {/* aside Widget */}
                            <div className="aside">
                                <h3 className="aside-title">Ціна</h3>
                                <PriceRangeSlider/>
                            </div>
                            {/* /aside Widget */}

                            {/* aside Widget */}
                            <div className="aside">
                                <h3 className="aside-title">Бренд</h3>
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
                                <h3 className="aside-title">Топ продажів</h3>
                                {storeAsides.map((storeAside) =>
                                    <div key={storeAside.key} className="product-widget">
                                        <div className="product-img">
                                            <img src={storeAside.img} alt=""/>
                                        </div>
                                        <div className="product-body" style={{paddingLeft: '60px'}}>
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
                                        Сортувати за:
                                        <select className="input-select">
                                            <option value="0">Популярний</option>
                                            <option value="1">Позиція</option>
                                        </select>
                                    </label>

                                    <label>
                                        Показати:
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
                            <div className="row" style={{justifyContent: 'space-around'}}>
                                {/* product */}
                                {storeProducts.map((storeProduct) => (
                                    <div className='col-md-4 col-xs-12' style={{display: 'contents'}}>
                                        <Product product={{
                                            id: storeProduct.id,
                                            name: storeProduct.names,
                                            image: storeProduct.img,
                                            price: storeProduct.price,
                                            oldprice: storeProduct.oldprice,
                                            category: storeProduct.category,
                                        }} key={storeProduct.key}/>
                                    </div>
                                ))}
                            </div>
                            {/* /store products */}

                            {/* store bottom filter */}
                            <div className="store-filter clearfix">
                                <ul className="store-pagination">
                                    <li className="active">1</li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faAnglesRight}
                                                                     className="fa fa-angle-right"></FontAwesomeIcon></a>
                                    </li>
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