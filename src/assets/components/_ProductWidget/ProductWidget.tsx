import {Col, Container, Row} from "react-bootstrap";
import TopSellingTwo from "../_TopSellingTwo/TopSellingTwo";
import TopSellingTwo1 from "../_TopSellingTwo/TopSellingTwo1";
import TopSellingTwo2 from "../_TopSellingTwo/TopSellingTwo2";


const ProductWidget = () => {
    return (
            <Container>
                <Row>
                    <Col sm={12}  md={4}>
                        <TopSellingTwo/>
                    </Col>
                    <Col sm={12}  md={4}>
                        <TopSellingTwo1/>
                    </Col>
                    <Col sm={12}  md={4}>
                        <TopSellingTwo2/>
                    </Col>
                </Row>
            </Container>
    );
};

export default ProductWidget;