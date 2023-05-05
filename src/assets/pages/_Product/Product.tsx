import Header from "../../components/_Header/Header";
import Navigation from "../../components/_Navigation/Navigation";
import SingUp from "../../components/_SingUp/SingUp";
import Footer from "../../components/_Footer/Footer";
import Breadcrumb from "./Breadcrumb";
import ProductMainSec1 from "./ProductMainSec1";
import ProductMainSec2 from "./ProductMainSec2";
import NewSletter from "./NewSletter";
import "../../styles/index.css"


const Product = () => {
    return (
        <div>
            <Header/>
            <Navigation/>
            {/*BREADCRUMB*/}
            <Breadcrumb/>
            {/* /BREADCRUMB */}

            {/* SECTION */}
            <ProductMainSec1/>
            {/* /SECTION */}

            {/* Section */}
            <ProductMainSec2/>
            {/* /Section */}

            {/* NEWSLETTER */}
            <NewSletter/>
            {/* /NEWSLETTER */}
            <SingUp/>
            <Footer/>
        </div>
    );
};

export default Product;