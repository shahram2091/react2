import './footer.css'
import {BsMouseFill} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import {TiSocialTwitter} from "react-icons/ti";
import {TiSocialYoutubeCircular} from "react-icons/ti";
import {TiSocialGithubCircular} from "react-icons/ti";

function Footer(){
    return(
        <div id="footer" className="container footer-container">
            <h1>That's all
                <a href="#home">
                    <h2><BsMouseFill />-scroll up-</h2>
                </a>
            </h1>
            <div className="social-link">
                <a href="#">
                    <BsInstagram  className="social"/>
                </a>
                <a href="#">
                    <BsFacebook  className="social"/>
                </a>
                <a href="#">
                    <TiSocialTwitter className="social"/>
                </a>
                <a href="#">
                    <TiSocialYoutubeCircular className="social"/>
                </a>
                <a href="#">
                    <TiSocialGithubCircular className="social"/>
                </a>
            </div>

        </div>
    );
}
export default Footer;
