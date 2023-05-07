import './stocks.scss'
import {NavLink} from "react-router-dom";

const Stocks = () => {
    return (
        <div id="hot-deal" className="section">
            {/*container */}
            <div className="container">
                {/*row */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="hot-deal">
                            <ul className="hot-deal-countdown">
                                <li>
                                    <div>
                                        <h3>02</h3>
                                        <span>Днів</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h3>10</h3>
                                        <span>Години</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h3>34</h3>
                                        <span>Хв</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h3>60</h3>
                                        <span>Сек</span>
                                    </div>
                                </li>
                            </ul>
                            <h2 className="text-uppercase">гаряча пропозиція цього тижня</h2>
                            <p>Нова колекція ЗНИЖКИ до 50%.</p>
                            <NavLink className="primary-btn cta-btn" to="/store">Здійснити покупку</NavLink>
                        </div>
                    </div>
                </div>
                {/*/row */}
            </div>
            {/*container*/}
        </div>
    );
};

export default Stocks;