import "./index.scss"
import LogoS from "../../assets/images/logo-s-biege.png"
// import LogoSubtitle from "../../assets/images/logo_sub.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
    <div className="nav-bar">
        <Link className="logo"
         to='/'>
            <img src={LogoS} alt="logo"></img>
            {/* <img className="sub-logo" src={LogoSubtitle} alt="logo" ></img> */}
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
            <NavLink activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
            <NavLink activeclassname="active" to="/contact" className="contact-link">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_black"
                 rel="noreferrer" 
                 href="https://github.com/QuirkyQode">
                    <FontAwesomeIcon icon={faGithub} color="4d4d4e"
                    size="2x"></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target="_black" rel="noreferrer" 
                href="https://www.linkedin.com/in/meera-murthy/">
                    <FontAwesomeIcon icon={faLinkedin} color="4d4d4e"
                    size="2x"></FontAwesomeIcon>
                </a>
            </li>
        </ul>
    </div>)
}

export default Sidebar;