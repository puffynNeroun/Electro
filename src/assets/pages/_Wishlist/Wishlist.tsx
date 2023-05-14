import {Col, Container, Row} from "react-bootstrap";
import SingUp from "../../components/_SingUp/SingUp";
import {wishlistItems} from "./wishlist.data";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './wishlist.scss'
import {useState} from "react";


const Wishlist = () => {

    let itemsData = []

    const [isLoaded, setIsLoaded] = useState(0);

    if (isLoaded === 1) {
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
    } else {
        async function logJSONData() {
            const response = await fetch("http://example.com/movies.json");
            const jsonData = await response.json();
            itemsData = jsonData;//Заменить таймаут на API и в рендере заменить название массива на itemsData
            // setIsLoaded(1)
        }

        setTimeout(() => {
            setIsLoaded(1)
        }, 5000)

        return (
            <div>
                <Container>
                    <Row>
                        <div className="wishlist__title">Список бажань</div>
                        <div className="wishlist__text">Мій перелік бажань <span>(За замовчуванням)</span></div>
                    </Row>
                </Container>
                <SingUp/>
            </div>
        );
    }
};

export default Wishlist;