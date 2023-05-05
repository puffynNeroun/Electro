import Header from "../../components/_Header/Header";
import Navigation from "../../components/_Navigation/Navigation";
import Footer from "../../components/_Footer/Footer";
import SingUp from "../../components/_SingUp/SingUp";
import Regular from "./Regular";
import '../../styles/index.css'


const Blank = () => {
    return (
        <div>
            <Regular/>
            <SingUp/>
        </div>
    );
};

export default Blank;