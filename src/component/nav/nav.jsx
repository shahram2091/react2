import './nav.css';
import { IoHome } from "react-icons/io5";
import {IoPeopleOutline } from "react-icons/io5";
import {IoRadioOutline } from "react-icons/io5";
import {IoMailOpenOutline  } from "react-icons/io5";
import {IoShuffleOutline  } from "react-icons/io5";

function Navbar(){
    return (
        <div className="navigation">
            <a href="#home">
           < IoHome className='icon active-nav' /> 
            </a>
            <a href="#about">
           < IoPeopleOutline className='icon ' /> 
            </a>
            <a href="#members">
           < IoRadioOutline className='icon ' /> 
            </a>
            <a href="#contact">
           < IoMailOpenOutline className='icon ' /> 
            </a>
            <a href="#footer">
            < IoShuffleOutline className='icon ' /> 
            </a>
        </div>
    );
}
let Icons = document.querySelectorAll('.navigation .icon');
Icons.forEach((icon) => {
    icon.addEventListener('click',()=>{
        changeactive();
        icon.classList.add('active-nav');
    });
});
function changeactive(){
    Icons.forEach(icon =>{
        icon.classList.remove('active-nav')
    });
}
export default Navbar;