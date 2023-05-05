import Collection from "../../components/_Collection/Collection";
import NewProduct from "../../components/_NewProduct/_Slider/SimpleSlider";
import Stocks from "../../components/_Stocks/Stocks";
import TopSelling from "../../components/_TopSelling/TopSelling";
import ProductWidget from "../../components/_ProductWidget/ProductWidget";
import SingUp from "../../components/_SingUp/SingUp";

const Index = () => {
    return (
        <div>
            <Collection/>
            <NewProduct/>
            <Stocks/>
            <TopSelling/>
            <ProductWidget />
            <SingUp/>
        </div>
    );
};

export default Index;