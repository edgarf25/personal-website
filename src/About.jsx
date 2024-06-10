import './About.css';
import logo from './assets/me.png';
function About() {
    return(
      <div className="about">
            <div className="about-header">
                <div className="about-text">
                    <h1>About Me</h1><hr  /><br/>
                    <p>Hello! I'm a recent graduate from California, holding a Bachelor's degree in Computer Science from California State University San Marcos (CSUSM). With a strong foundation in various programming languages, I am eager to embark on my professional journey and explore exciting opportunities in the tech industry.</p><br/>
                    <p>My passion for technology and problem-solving has led me to pursue a career in software engineering. I am excited to leverage my skills and knowledge to create innovative solutions that make a positive impact on the world. I am a quick learner, a team player, and a creative thinker who is always looking for new challenges to tackle.</p><br/>
                    <p>When I'm not coding, you can find me exploring the great outdoors, playing video games, or experimenting with new recipes in the kitchen. I am always up for an adventure and love trying new things. Feel free to reach out if you'd like to connect or collaborate on a project!</p><br/>
                    <p>Here are a some skills i've picked up along the way:</p>
                </div>
                <div className="about-img">
                    <img src={logo} alt="profile"/>
                </div>
            </div>
            <div className="about-skills">
                {/* <h1>Skills</h1> */}
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C++</li>
                    <li>Git</li>
                    <li>Linux</li>
                </ul>
            </div>   
      </div>
  );
  }
  export default About;