import uday from '..//assets/Profile.jpg';
import { Outlet, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
    return (
        <div className="container">
            <div className="animated-rectangle"></div>
            <div className="text">
                <div className="centered-title">
                    <div className="content">
                        <h1> Hi There,<br />
                            <span> I'm  Uday Natthani</span></h1>
                        <p>
                            <NavLink to="about" className="btn"><span>About Me</span></NavLink>
                        </p>
                        <p>
                            <a
                                href="/resume.pdf"
                                download="Uday_Natthani_Resume.pdf"
                                className="btn"
                            >

                                Download Resume
                            </a>
                        </p>
                        <div className="socials">
                            <ul className="social-icons">
                                <li><a className="facebook" aria-label="Facebook" href="https://www.facebook.com/uday.natthani/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                <li><a className="instagram" aria-label="Instagram" href="https://www.instagram.com/udaynatthani/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a className="github" aria-label="GitHub" href="https://github.com/udaynatthani" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
                                <li><a className="linkedin" aria-label="LinkedIn" href="https://www.linkedin.com/in/uday-natthani-937049315/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
