import '../../styles/index.css'
import './regular.scss'
import {NavLink} from "react-router-dom";

const Regular = () => {
    return (
        <>
            <div id="breadcrumb" className="section">
                {/*container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="breadcrumb-header">Замовлення</h3>
                            <ul className="breadcrumb-tree">
                                <li><NavLink to="/">Головна</NavLink></li>
                                <li className="active">Підтвердження</li>
                            </ul>
                        </div>
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>
            {/* /BREADCRUMB */}

            {/* SECTION */}
            <div className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <p className='regular__title'>Дякуємо за замовлення !</p>
                        <div className='regular-block'>
                            <p className='regular-block__text'>Ваше замовлення було <span>успішно</span> оформлене та надіслане відділу
                            обробки. Наша адміністрація
                            перевірить Ваше замовлення найближчим часом, щоб переконатися, що все в порядку, та
                            підготуємо його для відправки. <br/>
                            <br/>
                            Якщо будуть потрібні додаткові деталі щодо Вашого замовлення, ми зв'яжемося з Вами. Будьте
                            впевнені, що ми робимо все можливе, щоб забезпечити якісний сервіс та задовільнити Ваші
                            потреби.</p>
                        </div>
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>
            {/* /SECTION */}
        </>
    );
};

export default Regular;