import Collection from "../../components/_Collection/Collection";
import Stocks from "../../components/_Stocks/Stocks";
import ProductWidget from "../../components/_ProductWidget/ProductWidget";
import SingUp from "../../components/_SingUp/SingUp";
import SliderOne from "../../components/_TopSelling/_Slider/SliderOne";
import SliderTwo from "../../components/_TopSelling/_Slider/SliderTwo";

const Index = () => {
    return (
        <div>
            <Collection/>
            <SliderTwo/>
            <Stocks/>
            <SliderOne/>
            <ProductWidget />
            <SingUp/>
        </div>
    );
};

export default Index;