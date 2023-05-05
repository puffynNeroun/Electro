import Header from "./assets/components/_Header/Header.tsx";
import Index from "./assets/pages/Index/Index";
import Footer from "./assets/components/_Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Checkout from "./assets/pages/_Checkout/Checkout";
import Navigation from "./assets/components/_Navigation/Navigation";
import Blank from "./assets/pages/_Blank/Blank";
import Product from "./assets/pages/_Product/Product";




const App = () => {

    return (
        <>
            <Header/>
            <Navigation/>
            <Routes>
               <Route path="/" element={<Index />}  />
                <Route path='/blank' element={<Blank/>} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/product" element={<Product/>} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App;
