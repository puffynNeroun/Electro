import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faClose, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../../../../context';

function Cart() {
    const { cart } = useContext(StoreContext);
    const totalCount = cart.items.reduce((sum, item) => sum + item.count, 0) // Всего вещей
    const totalSum = cart.items.reduce((sum, item) => sum + item.count * item.price, 0)

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
                    {/* Список корзины */}
                    <div className="cart-list">
                        {cart.items.map(item => (
                            <div className="product-widget">
                                <div className="product-img">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="product-body">
                                    <h3 className="product-name"><a href={`#${item.id}`}>{item.name}</a></h3>
                                    <h4 className="product-price"><span className="qty">{item.count}x</span>${(item.price / 100).toFixed(2)}</h4>
                                </div>
                                <button
                                    className="delete"
                                    onClick={_ => cart.delete(item.id)}
                                >
                                    <FontAwesomeIcon icon={faClose} className="fa fa-close" />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Результат */}
                    <div className="cart-summary">
                        {/* <small>Selected 3 item(s)</small> */}
                        <small>Selected {cart.items.length} item(s). Total items {totalCount}</small>
                        <h5>SUMMARY: ${(totalSum / 100).toFixed(2)}</h5>
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
