import './Welcome.css'
import profile from './assets/me.png'

function Welcome() {
  return(
    <div className="welcome">
        <img src={profile} alt="profile"/>
        <h1><span>Hello, I&apos;m Edgar Fong </span>  a Software Engineer based in California.</h1>
        <p>I&apos;m a software engineer who loves building and designing outstanding digital experiences. Currently, I&apos;m eager to expand my skill set and take on new, challenging projects as well as new opportunities.</p> 
    </div>
);
}
export default Welcome;