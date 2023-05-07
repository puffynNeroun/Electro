import {useState} from "react";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import fb from './../../img/facebook.svg'
import twitter from './../../img/twitter.svg'
import instagram from './../../img/instagram.svg'
import pinterest from './../../img/pinterest.svg'
import {NavLink} from "react-router-dom";
const SingUp = () => {

        const [email, setEmail] = useState('')
        const [isValid, setIsValid] = useState(false)

        const validateEmail = () => {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setIsValid(re.test(email) && email.length <= 20);
        }

        const handleChange = (event) => {
            setEmail(event.target.value)
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            validateEmail();
        }

    return (
        <div id="newsletter" className="section">
            {/*container */}
            <div className="container">
                {/* row */}
                <div className="row">

                    <div className="col-md-12">
                        <div className="newsletter">
                            <p>Підпишіться на <strong>БЮЛЕТЕНЬ</strong></p>
                            <form className="form-aw" onSubmit={handleSubmit}>
                                <FontAwesomeIcon icon={faEnvelope} className="form-img"/>
                                <input className="input" value={email} onChange={handleChange} type="email" placeholder="Enter Your Email" pattern="[0-16]+"/>
                                {email && (
                                    <div style={{ marginTop: '10px' }}>
                                        {isValid ? (
                                            <p className="isValide">Електронна адреса дійсна</p>
                                        ) : (
                                            <p className="isValide">Електронна адреса недійсна або задовга (максимум 20 символів)</p>
                                        )}
                                    </div>
                                )}
                                    <button className="newsletter-btn" onClick={validateEmail}>


                                        <FontAwesomeIcon icon={faEnvelope} className="fa fa-envelope" style={{paddingRight: '10px'}}></FontAwesomeIcon>
                                        Підпишіться
                                    </button>
                            </form>
                            <ul className="newsletter-follow">
                                <li>
                                    <NavLink to="/">
                                        <img src={fb} alt="fb" />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/"> <img src={twitter} alt="twitter" /></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/"><img src={instagram} alt="instagram" /></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/"><img src={pinterest} alt="pinterest" /></NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* /row */}
            </div>
            {/* /container */}
        </div>
    );
};

export default SingUp;