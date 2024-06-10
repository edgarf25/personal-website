import './Welcome.css'
import profile from './assets/me.png'

function Welcome() {
  return(
    <div className="welcome">
        <img src={profile} alt="profile"/>
        <h1><span>Hello, I'm Edgar Fong </span>  a Software Engineer based in California.</h1>
        <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at MYHOUSE</p> 
    </div>
);
}
export default Welcome;