import Header from "./assets/components/_Header/Header.tsx";
import Index from "./assets/pages/Index/Index";
import Footer from "./assets/components/_Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Checkout from "./assets/pages/_Checkout/Checkout";
import Navigation from "./assets/components/_Navigation/Navigation";
import Blank from "./assets/pages/_Blank/Blank";
import Product from "./assets/pages/_Product/Product";
import Store from "./assets/pages/_Store/Store";
import MyAccount from "./assets/pages/_MyAccount/MyAccount";
import Wishlist from "./assets/pages/_Wishlist/Wishlist";
import { useContext, useEffect } from "react";
import { StoreContext } from "./context.tsx";


const App = () => {
    const { cart } = useContext(StoreContext)

    useEffect(() => {
        cart.items = JSON.parse(localStorage.getItem("cart_items") ?? '[]')
    }, [])

    return (
        <>
            <Header/>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path='/blank' element={<Blank/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path='/store' element={<Store/>}/>
                <Route path='/myAccount' element={<MyAccount/>}/>
                <Route path='/wishlist' element={<Wishlist/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App;
