import { useState, useEffect } from 'react';
import './Projects.css';
import project_data from './assets/projects_data.js'
import arrow_icon from './assets/arrow_icon.svg'
import Modal from './Modal';

//preloading images
import robotImg from './assets/robotimg.jpg';
import ocrImg from './assets/ocrimg.png';
import cloudImg from './assets/cloudimg.png';
import botnetImg from './assets/botnetimg.png';
import unityImg from './assets/unityimg.png';
import dndImg from './assets/dndimg.png';
import gamephotoImg from './assets/gamephoto.png';
import img2d3d from './assets/2d3dimg.png';
import tileSolverImg from './assets/tilesolverimg.png';

const preloadImages = (imageUrls) => { //function used to preload images(might have to preload them at an earlier stage to make it faster)
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

const imagesToPreload = [
  robotImg,
  ocrImg,
  cloudImg,
  botnetImg,
  unityImg,
  dndImg,
  gamephotoImg,
  img2d3d,
  tileSolverImg,
];


function Projects() {
    const isMobileScreen = window.matchMedia("(max-width: 1024px)").matches;
    const [visibleProjects, setVisibleProjects] = useState(3); // Setting initial visible projects to 3 on large screens
    const [isMobile, setIsMobile] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null); // To manage the selected project
    const [isModalOpen, setIsModalOpen] = useState(false); // To manage modal state
    
    const checkMobileScreen = () => {

      const isMobileScreen = window.matchMedia("(max-width: 1024px)").matches;
      setIsMobile(isMobileScreen);
      // setVisibleProjects(isMobileScreen ? 2 : 3);
  };

  useEffect(() => {
    preloadImages(imagesToPreload); //loading images at beginning
    
    // checkMobileScreen(); // Checking if its mobile or not on initial load
    window.addEventListener('resize', checkMobileScreen); // This will update on resize

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', checkMobileScreen);
  }, []);

  const openModal = (project) => {
    if (project.has_link == true) { //if the json file has a link then open the link
      console.log(project.has_link);
      window.open(project.p_link, '_blank');

    } else { //if not open the modal
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null); // Reset selected project
  };

    // Function to load more projects
  const loadMoreProjects = () => { //will load 3 on desktop and 2 on mobile
    visibleProjects >= project_data.length ? setVisibleProjects(isMobile ? 2 : 3) : setVisibleProjects(prevVisible => prevVisible + (isMobile ? 2 : 3))
  };
  
  return (
    <div id='projects' className='projects'>
      <div className='projects-title'>
        <h1>Projects</h1>
      </div>
      <div className="projects-container">
        {project_data.slice(0, visibleProjects).map((project, index) => {
          return (
            <div onClick={() => openModal(project)} key={index} className="project-card">
              <h2>{project.p_name}</h2>
              <div className='img-container'>
                <img src={project.p_img} alt='project' className="card-img" />
              </div>
              <p>{project.p_desc}</p>
              <p><strong>Technologies:</strong> {project.p_tech}</p>
              <div className='project-readmore'>
                <p>Read More</p>
                <img src={arrow_icon} alt='arrow' />
              </div>
            </div>
          );
        })}
      </div>
        <div className='loadmore' onClick={loadMoreProjects}>
          {visibleProjects >= project_data.length ? 'Show less' : 'Show more'}
        </div>

      <Modal //modal for when user clicks on a project
          isOpen={isModalOpen}
          onClose={closeModal}
          content={selectedProject ? (
            <>
              <h2>{selectedProject.p_name}</h2>
              <p>{selectedProject.p_moreinfo}</p>
              <img src={selectedProject.p_img}/>
            </> 
          ) : null}
      />
      </div>
    );
  }

export default Projects;