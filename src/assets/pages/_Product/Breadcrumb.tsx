import 'bootstrap/dist/css/bootstrap-grid.min.css'
import '../../styles/index.css'
import {NavLink} from "react-router-dom";
const Breadcrumb = () => {
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
                                <li><NavLink to="/">Headphones</NavLink></li>
                                <li className="active">Product name goes here</li>
                            </ul>
                        </div>
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>
            {/* /BREADCRUMB */}
        </div>
    );
};

export default Breadcrumb;