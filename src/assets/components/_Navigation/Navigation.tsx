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
                        <li ><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/">Hot Deals</NavLink></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">Laptops</a></li>
                        <li><a href="#">Smartphones</a></li>
                        <li><a href="#">Cameras</a></li>
                        <li><a href="#">Accessories</a></li>
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