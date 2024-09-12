import './About.css';
import logo from './assets/me.png';
function About() {
    return(
      <div id='about' className="about">
            <div className="about-header">
                <div className="about-text">
                    <h1>About Me</h1><hr  /><br/>
                    <p>Hello! I&apos;m a recent graduate from California, holding a <span>Bachelor&apos;s degree in Computer Science</span> from <span>California State University San Marcos (CSUSM)</span>. With a <span>strong foundation in various programming languages</span>, I am eager to embark on my professional journey and explore exciting opportunities in the <span>tech industry</span>.</p><br/>
                    <p>My <span>passion for technology and problem-solving</span> has led me to pursue a career in <span>software engineering</span>. I am excited to leverage my skills and knowledge to create <span>innovative solutions</span> that make a positive impact on the world. I am a <span>quick learner</span>, a <span>team player</span>, and a <span>creative thinker</span> who is always looking for <span>new challenges</span> to tackle.</p><br/>
                    <p>When I&apos;m not coding, you can find me <span>exploring the great outdoors</span>, <span>playing video games</span>, or <span>experimenting with new recipes</span> in the kitchen. I am always up for an adventure and love trying new things. Feel free to reach out if you&apos;d like to <span>connect or collaborate on a project</span>!</p><br/>
                    <p>Here are a some skills i&apos;ve picked up along the way:</p>
                </div>
                <div className="about-img">
                    <img src={logo} alt="profile"/>
                </div>
            </div>
            <div className="about-skills">
                {/* <h1>Skills</h1> */}
                <ul>
                    <li>Python</li>
                    <li>C++</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>C#</li>
                    <li>Linux</li>
                    <li>MongoDB</li>
                    <li>Terraform</li>
                    <li>Java</li>
                    <li>Git</li>
                    <li>Cloud Computing</li>
                    <li>MATHLAB</li>
                </ul>
            </div>   
      </div>
  );
  }
  export default About;