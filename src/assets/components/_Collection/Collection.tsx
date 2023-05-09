import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {collectionItems} from "./collection.data";


const Collection = () => {
    return (
        <div className="section">
            {/* container */}
            <div className="container">
                {/* row */}
                <div className="row">
                    {/* shop */}
                    {collectionItems.map((collectionItem) =>
                        <div key={collectionItem.key} className="col-md-4 col-xs-6" >
                            <div className="shop">
                                <div className="shop-img">
                                    <img src={collectionItem.img} alt="shop01"/>
                                </div>
                                <div className="shop-body">
                                    <h3>{collectionItem.title}</h3>
                                    <NavLink to="/store" className="cta-btn">
                                        {collectionItem.link}
                                        <FontAwesomeIcon icon={faArrowCircleRight} className="fa fa-arrow-circle-right"
                                                         style={{paddingLeft: '10px'}}></FontAwesomeIcon>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* /shop */}
                </div>
                {/* /row */}
            </div>
        </div>
    );
};

export default Collection;