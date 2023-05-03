import shop01 from './../../img/shop01.png'
import shop02 from './../../img/shop02.png'
import shop03 from './../../img/shop03.png'


const Collection = () => {
    return (
        <div className="section">
            {/* container */}
            <div className="container">
                {/* row */}
                <div className="row">
                    {/* shop */}
                    <div className="col-md-4 col-xs-6">
                        <div className="shop">
                            <div className="shop-img">
                                <img src={shop01} alt="shop01"/>
                            </div>
                            <div className="shop-body">
                                <h3>Laptop<br/>Collection</h3>
                                <a href="#" className="cta-btn">Shop now <i
                                    className="fa fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* /shop */}

                    {/* shop */}
                    <div className="col-md-4 col-xs-6">
                        <div className="shop">
                            <div className="shop-img">
                                <img src={shop03} alt="shop03" />
                            </div>
                            <div className="shop-body">
                                <h3>Accessories<br />Collection</h3>
                                <a href="#" className="cta-btn">Shop now <i
                                    className="fa fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* /shop */}

                    {/* shop */}
                    <div className="col-md-4 col-xs-6">
                        <div className="shop">
                            <div className="shop-img">
                                <img src={shop02} alt="shop02"/>
                            </div>
                            <div className="shop-body">
                                <h3>Cameras<br />Collection</h3>
                                <a href="#" className="cta-btn">Shop now <i
                                    className="fa fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* /shop */}
                </div>
                {/* /row */}
            </div>
        </div>
);
};

export default Collection;