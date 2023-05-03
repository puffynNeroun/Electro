import {useState} from 'react';
import product01 from "../../../img/product01.png";
import product02 from "../../../img/product02.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <div className="dropdown" onClick={handleToggle}>
                <a className="dropdown-toggle" aria-expanded="true">
                    <FontAwesomeIcon className="fa fa-shopping-cart" icon={faShoppingCart}/>
                    <span style=
                              {
                                  {
                                      fontSize: '12px',
                                      paddingTop: '5px'
                                  }
                              }
                    >Your Cart
                    </span>
                </a>

            </div>
            {isOpen && (
                <div className="cart-dropdown">
                    <div className="cart-list">
                        <div className="product-widget">
                            <div className="product-img">
                                <img src={product01} alt=""/>
                            </div>
                            <div className="product-body">
                                <h3 className="product-name"><a href="#">product name goes
                                    here</a></h3>
                                <h4 className="product-price"><span className="qty">1x</span>$980.00
                                </h4>
                            </div>
                            <button className="delete"><i className="fa fa-close"></i></button>
                        </div>

                        <div className="product-widget">
                            <div className="product-img">
                                <img src={product02} alt=""/>
                            </div>
                            <div className="product-body">
                                <h3 className="product-name"><a href="#">product name goes
                                    here</a></h3>
                                <h4 className="product-price"><span className="qty">3x</span>$980.00
                                </h4>
                            </div>
                            <button className="delete"><i className="fa fa-close"></i></button>
                        </div>
                    </div>
                    <div className="cart-summary">
                        <small>3 Item(s) selected</small>
                        <h5>SUBTOTAL: $2940.00</h5>
                    </div>
                    <div className="cart-btns">
                        <a href="#">View Cart</a>
                        <a href="#">Checkout <i className="fa fa-arrow-circle-right"></i></a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dropdown;