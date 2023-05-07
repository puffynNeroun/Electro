import { useState } from 'react';
import product01 from '../../../img/product01.png';
import product02 from '../../../img/product02.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faClose, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Cart() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <div className="dropdown" onClick={handleToggle}>
                <a className="dropdown-toggle" aria-expanded="true">
                    <FontAwesomeIcon className="fa fa-shopping-cart" icon={faShoppingCart} />
                </a>
            </div>

            {isOpen && (
                <div className="cart-dropdown">
                    <div className="cart-list">
                        <div className="product-widget">
                            <div className="product-img">
                                <img src={product01} alt="" />
                            </div>
                            <div className="product-body">
                                <h3 className="product-name"><a href="#">Product Name Here</a></h3>
                                <h4 className="product-price"><span className="qty">1x</span>$980.00</h4>
                            </div>
                            <button className="delete"><FontAwesomeIcon icon={faClose} className="fa fa-close" /></button>
                        </div>

                        <div className="product-widget">
                            <div className="product-img">
                                <img src={product02} alt="" />
                            </div>
                            <div className="product-body">
                                <h3 className="product-name"><a href="#">Product Name Here</a></h3>
                                <h4 className="product-price"><span className="qty">3x</span>$980.00</h4>
                            </div>
                            <button className="delete"><FontAwesomeIcon icon={faClose} className="fa fa-close" /></button>
                        </div>
                    </div>

                    <div className="cart-summary">
                        <small>Selected 3 item(s)</small>
                        <h5>SUMMARY: $2940.00</h5>
                    </div>

                    <div className="cart-btns">
                        <NavLink to="/checkout">Checkout <FontAwesomeIcon icon={faArrowCircleRight} className="fa fa-arrow-circle-right" /></NavLink>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
