import Header from "./assets/components/_Header/Header.tsx";
import Index from "./assets/pages/Index/Index";
import Footer from "./assets/components/_Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Checkout from "./assets/pages/_Checkout/Checkout";
import Navigation from "./assets/components/_Navigation/Navigation";




const App = () => {

    return (
        <>
            <Header/>
            <Navigation/>
            <Routes>
               <Route path="/" element={<Index />}  />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App;
