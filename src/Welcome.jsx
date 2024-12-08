import './Welcome.css'
import profile from './assets/me.png'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'

function Welcome() {
  return(
    <div className="welcome">
        <img src={profile} alt="profile"/>
        <h1><span>Hello, I&apos;m Edgar Fong </span>  a Software Engineer based in California.</h1>
        <p>I&apos;m a software engineer who loves building and designing outstanding digital experiences. Currently, I&apos;m eager to expand my skill set and take on new, challenging projects as well as new opportunities.</p> 

        <div className="social">
          <a href="https://github.com/edgarf25" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github"/>
          </a>
          <a href="https://www.linkedin.com/in/edgar-fong" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin"/>
          </a>
        </div>
    
    </div>
);
}
export default Welcome;