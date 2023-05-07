import SingUp from "../../components/_SingUp/SingUp";
import '../../styles/index.css'
import './checkout.scss'
import {NavLink} from "react-router-dom";

const Checkout = () => {
    return (
        <div>

            {/*BREADCRUMB*/}
            <div id="breadcrumb" className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="breadcrumb-header">ПЕРЕВІРКА</h3>
                            <ul className="breadcrumb-tree">
                                <li><NavLink to="/">Головна</NavLink></li>
                                <li className="active">ПЕРЕВІРКА</li>
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

                        <div className="col-md-7">
                            {/* Billing Details */}
                            <div className="billing-details">
                                <div className="section-title">
                                    <h3 className="title">Платіжна адреса</h3>
                                </div>
                                <div className="form-group">
                                    <input className="input" type="text" name="first-name" placeholder="Ім'я"/>
                                </div>
                                <div className="form-group">
                                    <input className="input" type="text" name="last-name" placeholder="Прізвище"/>
                                </div>
                                <div className="form-group">
                                    <input className="input" type="email" name="email" placeholder="Електронна пошта"/>
                                </div>
                                <div className="form-group">
                                    <input className="input" type="text" name="address" placeholder="Адреса"/>
                                </div>
                                <div className="form-group">
                                    <input className="input" type="text" name="city" placeholder="Місто"/>
                                </div>
                                <div className="form-group">
                                    <input className="input" type="text" name="country" placeholder="Країна"/>
                                </div>
                                <div className="form-group">
                                    <input className="input" type="text" name="zip-code" placeholder="Поштовий індекс"/>
                                </div>
                                <div className="form-group">
                                    <input className="input" type="tel" name="tel" placeholder="Телефон"/>
                                </div>
                                <div className="form-group">
                                    <div className="input-checkbox">
                                        <input type="checkbox" id="create-account"/>
                                        <label htmlFor="create-account">
                                            <span></span>
                                            Створити акаунт?
                                        </label>
                                        <div className="caption">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt.</p>
                                            <input className="input" type="password" name="password"
                                                   placeholder="Введіть ваш пароль"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Billing Details */}

                            {/* Shiping Details */}
                            <div className="shiping-details">
                                <div className="section-title">
                                    <h3 className="title">Адреса доставки</h3>
                                </div>
                                <div className="input-checkbox">
                                    <input type="checkbox" id="shiping-address"/>
                                    <label htmlFor="shiping-address">
                                        <span></span>
                                        Надіслати на іншу адресу?
                                    </label>
                                    <div className="caption">
                                        <div className="form-group">
                                            <input className="input" type="text" name="first-name"
                                                   placeholder="Ім'я"/>
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="last-name"
                                                   placeholder="Прізвище"/>
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="email" name="email" placeholder="Електронна пошта"/>
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="address" placeholder="Адреса"/>
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="city" placeholder="Місто"/>
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="country" placeholder="Країна"/>
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="zip-code"
                                                   placeholder="Поштовий індекс"/>
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="tel" name="tel" placeholder="Телефон"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Shiping Details */}

                            {/* Order notes */}
                            <div className="order-notes">
                                <textarea className="input" placeholder="Order Notes"></textarea>
                            </div>
                            {/* /Order notes */}
                        </div>

                        {/* Order Details */}
                        <div className="col-md-5 order-details">
                            <div className="section-title text-center">
                                <h3 className="title">Ваше замовлення</h3>
                            </div>
                            <div className="order-summary">
                                <div className="order-col">
                                    <div><strong>ПРОДУКТ</strong></div>
                                    <div><strong>РАЗОМ</strong></div>
                                </div>
                                <div className="order-products">
                                    <div className="order-col">
                                        <div>Тут вказується 1 назва продукту</div>
                                        <div>$980.00</div>
                                    </div>
                                    <div className="order-col">
                                        <div>Тут вказується 2 назви продукту</div>
                                        <div>$980.00</div>
                                    </div>
                                </div>
                                <div className="order-col">
                                    <div>Доставка</div>
                                    <div><strong>БЕЗКОШТОВНО</strong></div>
                                </div>
                                <div className="order-col">
                                    <div><strong>РАЗОМ</strong></div>
                                    <div><strong className="order-total">$2940.00</strong></div>
                                </div>
                            </div>
                            <div className="payment-method">
                                <div className="input-radio">
                                    <input type="radio" name="payment" id="payment-1"/>
                                    <label htmlFor="payment-1">
                                        <span></span>
                                        Прямий банківський переказ
                                    </label>
                                    <div className="caption">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <div className="input-radio">
                                    <input type="radio" name="payment" id="payment-2"/>
                                    <label htmlFor="payment-2">
                                        <span></span>
                                        Оплата чеком
                                    </label>
                                    <div className="caption">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <div className="input-radio">
                                    <input type="radio" name="payment" id="payment-3"/>
                                    <label htmlFor="payment-3">
                                        <span></span>
                                        Система Paypal
                                    </label>
                                    <div className="caption">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="input-checkbox">
                                <input type="checkbox" id="terms"/>
                                <label htmlFor="terms">
                                    <span></span>
                                    Я прочитав і приймаю <a href="#">умови</a>
                                </label>
                            </div>
                            <NavLink to="/blank" className="primary-btn order-submit">Зробити замовлення</NavLink>
                        </div>
                        {/* /Order Details */}
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

export default Checkout;