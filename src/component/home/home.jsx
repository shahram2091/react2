import './home.css';
import Buttons from '../button/button';
import img from '../props/img2.jpg';
import {BsMouse} from 'react-icons/bs';

function Home(){
    return(
        <div id="home" className="container home-container">
            <div className="logo">
                <div className="main-img">
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                </div>
                <img src={img} alt="" />
            </div>
            <a href="#footer" className="scroll-down">
                <hr />
                <h5>scroll down</h5>
                <BsMouse className="scroll" />
                <hr />
            </a>
            <h2><span>About Me</span><br/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ad voluptas facilis quam accusamus vero laboriosam doloremque
                 quis soluta unde, harum possimus ipsam quasi dicta quaerat quae tenetur ab vitae. Voluptates, ipsum similique natus vero 
                 aperiam accusamus ut modi corporis eos repellendus labore qui, ex, laboriosam ab quis explicabo obcaecati sequi deleniti </p>
            </h2>
            <Buttons />
        </div>
    );
}
const toggle = document.querySelector('.main-img');
toggle.addEventListener('click', () =>{
    toggle.classList.toggle('active');
});
export default Home;