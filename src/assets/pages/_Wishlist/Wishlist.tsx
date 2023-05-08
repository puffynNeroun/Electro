import {Col, Container, Row} from "react-bootstrap";
import SingUp from "../../components/_SingUp/SingUp";
import {wishlistItems} from "./wishlist.data";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './wishlist.scss'

const Wishlist = () => {
    return (
        <div>
            <Container>
                <Row>
                    <div className="wishlist__title">Список бажань</div>
                    <div className="wishlist__text">Мій перелік бажань <span>(За замовчуванням)</span></div>
                    <Col lg={12} style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                        {wishlistItems.map((wishlistItem) =>
                            <div key={wishlistItem.key} className="col-md-4 col-xs-12">
                                <div className="product product__myAccount">
                                    <div className="product-img">
                                        <img src={wishlistItem.img} alt=""/>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">{wishlistItem.category}</p>
                                        <h3 className="product-name"><a style={{fontSize: '12px'}} href="#">{wishlistItem.names}</a></h3>
                                        <h4 className="product-price" style={{fontSize: '12px'}}>{wishlistItem.price}<del
                                            className="product-old-price">{wishlistItem.oldprice}</del></h4>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
            <SingUp/>
        </div>
    );
};

export default Wishlist;