import './Navbar.css';
import logo from './assets/logo.png';

function Navbar () {
    return (
      <div className="navbar">
          <img src={logo} alt="https://placehold.co/100" className="navbar-logo" />
          <ol className="horizontal-list"> 
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact</li>
          </ol>
          <div className="resume">Resume</div>
        {/* <hr /> */}
      </div>
     
    );
  }
  
  export default Navbar