import Header from "./assets/components/_Header/Header.tsx";
import Navigation from "./assets/components/_Navigation/Navigation.tsx";
import Collection from "./assets/components/_Collection/Collection.tsx";
import Stocks from "./assets/components/_Stocks/Stocks";
import TopSelling from "./assets/components/_TopSelling/TopSelling";
import TopSellingTwo from "./assets/components/_TopSellingTwo/TopSellingTwo";
import SingUp from "./assets/components/_SingUp/SingUp";
import Footer from "./assets/components/_Footer/Footer";
import Test from "./assets/components/__TEST/Test.tsx";
import {Col, Container, Row} from "react-bootstrap";
import NewProduct from "./assets/components/_NewProduct/_Slider/SimpleSlider.tsx";


const App = () => {

    return (
        <>
            <Header/>
            <Navigation/>
            <Collection/>
            <NewProduct/>
            <Stocks/>
            <TopSelling/>
            <TopSellingTwo/>
            <SingUp/>
            <Footer/>
            <Container>
                <Row>
                    <Col>
                        <Test/>
                    </Col>
                    <Col>
                        <Test/>
                    </Col>
                    <Col>
                        <Test/>
                    </Col>
                </Row>

            </Container>

        </>
    )
}

export default App;
