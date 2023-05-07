import './navigation.scss'
import {NavLink} from "react-router-dom";


const Navigation = () => {
    return (
        <nav id="navigation">
             {/* container */}
            <div className="container">
                 {/* responsive-nav */}
                <div id="responsive-nav">
                     {/* NAV */}
                    <ul className="main-nav nav navbar-nav">
                        <li ><NavLink to="/">Головна</NavLink></li>
                        <li><NavLink to="/store">Магазин</NavLink></li>
                        <li><NavLink to="">Категорії</NavLink></li>
                        {/*<li><NavLink to="">Laptops</NavLink ></li>*/}
                        {/*<li><NavLink to="">Smartphones</NavLink ></li>*/}
                        {/*<li><NavLink to="">Cameras</NavLink ></li>*/}
                        {/*<li><NavLink to="">Accessories</NavLink ></li>*/}
                    </ul>
                     {/* /NAV */}
                </div>
                 {/* /responsive-nav */}
            </div>
             {/*/container*/}
        </nav>
    );
};

export default Navigation;