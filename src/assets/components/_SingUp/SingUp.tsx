import {useState} from "react";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
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
                            <p>Sign Up for the <strong>NEWSLETTER</strong></p>
                            <form className="form-aw" onSubmit={handleSubmit}>
                                <FontAwesomeIcon icon={faEnvelope} className="form-img"/>
                                <input className="input" value={email} onChange={handleChange} type="email" placeholder="Enter Your Email" pattern="[0-16]+"/>
                                {email && (
                                    <div style={{ marginTop: '10px' }}>
                                        {isValid ? (
                                            <p className="isValide">Email is valid</p>
                                        ) : (
                                            <p className="isValide">Email is invalid or too long (max 20 characters)</p>
                                        )}
                                    </div>
                                )}
                                    <button className="newsletter-btn" onClick={validateEmail}>


                                        <FontAwesomeIcon icon={faEnvelope} className="fa fa-envelope" style={{paddingRight: '10px'}}></FontAwesomeIcon>
                                        Subscribe
                                    </button>
                            </form>
                            <ul className="newsletter-follow">
                                <li>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
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