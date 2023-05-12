import './stocks.scss'
import {NavLink} from "react-router-dom";
import Counter from "../Counter/Counter";

const Stocks = () => {
    return (
        <div id="hot-deal" className="section">
            {/*container */}
            <div className="container">
                {/*row */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="hot-deal">

                            <Counter />


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