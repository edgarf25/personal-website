import './Welcome.css'
import profile from './assets/me.png'

function Welcome() {
  return(
    <div className="welcome">
        <img src={profile} alt="profile"/>
        <h1><span>Hello, I'm Edgar Fong </span>  a Software Engineer based in California.</h1>
        <p>I’m a software engineer who loves building and designing outstanding digital experiences. Currently, I’m eager to expand my skill set and take on new, challenging projects as well as new opportunities.</p> 
    </div>
);
}
export default Welcome;