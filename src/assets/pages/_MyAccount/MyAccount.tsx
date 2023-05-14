import SingUp from "../../components/_SingUp/SingUp";
import {NavLink} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import {myAccountItems} from "./myAccount.data";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './myAccount.scss'
import {useEffect, useState} from "react";



const MyAccount = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const delay = 5000; // 5 seconds delay

        const timeoutId = setTimeout(() => {
            fetch('https://api.example.com/data')
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => console.error(error));
        }, delay);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div>
            <Container>
                <Row>
                    <Col lg={5} >
                        <div className='myAccount'>
                            <div className="myAccount__title">
                                <div className="myAccount__title__data">Мій аккаунт</div>
                            </div>
                            <div className="myAccount__info">
                                <div className="myAccount__info__name">
                                    <div className="myAccount__info__name__sign">Ім'я:</div>
                                    <div className="myAccount__info__name__return">Іван Іванов</div>
                                </div>
                                <div className="myAccount__info__email">
                                    <div className="myAccount__info__name__sign">Email:</div>
                                    <div className="myAccount__info__name__return">ivanivanov@gmail.com</div>
                                </div>
                                <div className="myAccount__info__password">
                                    <div className="myAccount__info__name__sign">Пароль</div>
                                    <div className="myAccount__info__name__return">***********</div>
                                </div>
                                <div className="myAccount__info__telephone">
                                    <div className="myAccount__info__name__sign">Телефон</div>
                                    <div className="myAccount__info__name__return">+380-96-000-00-00</div>
                                </div>
                                <div className="myAccount__info__gender">
                                    <div className="myAccount__info__name__sign">Стать</div>
                                    <div className="myAccount__info__name__return">Чоловік</div>
                                </div>
                                <div className="myAccount__info__registration">
                                    <div className="myAccount__info__name__sign">Дата реєстрації</div>
                                    <div className="myAccount__info__name__return">11.04.2023 13.41</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7} style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                        {myAccountItems.map((myAccountItem) =>
                            <div key={myAccountItem.key} className="col-md-4 col-xs-12">
                                <div className="product product__myAccount">
                                    <div className="product-img">
                                        <img src={myAccountItem.img} alt=""/>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">{myAccountItem.category}</p>
                                        <h3 className="product-name"><NavLink to='/product' style={{fontSize: '12px'}}>{myAccountItem.names}</NavLink></h3>
                                        <h4 className="product-price" style={{fontSize: '12px'}}>{myAccountItem.price}<del
                                            className="product-old-price">{myAccountItem.oldprice}</del></h4>
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

export default MyAccount;