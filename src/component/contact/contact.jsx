import './contact.css'
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Contact(){
    return(
        <div className="container contact-container">
            <h1>contact me</h1>
            <div className="contact-links">
                <a href="" className="contact youtube">
                    <FaYoutube className='icon'/>
                    <h2>youtube <span>Creative Ambition</span></h2>
                </a>

                <a href="" className="contact whatsup">
                    <FaWhatsapp className='icon'/>
                    <h2>whatsup<span>000 000 000</span></h2>
                </a>

                <a href="" className="contact instagram">
                    <FaInstagram className='icon'/>
                    <h2>instagram <span>Creative Ambition</span></h2>
                </a>

            </div>
            </div>
   );
};
export default Contact;