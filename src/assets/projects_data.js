import project_img1 from './robotimg.jpg'
import project_img2 from './ocrimg.png'
import project_img3 from './cloudimg.png'
import project_img4 from './botnetimg.png'
import project_img5 from './unityimg.png'
import project_img6 from './dndimg.png'
import project_img7 from './gamephoto.png'
import project_img8 from './2d3dimg.png'
import project_img9 from './tilesolverimg.png'


const Project_Data = [
    {
        p_no:"01",
        p_name:"Deep Learning Autonomous Tennis Ball Collector",
        p_img: project_img1,
        p_desc:"Designed and developed a robot capable of autonomously locating and picking up tennis balls using deep learning and computer vision techniques.",
        p_tech:"Python, OpenCV, TensorFlow, ROS (Robot Operating System)",
        has_link: true,
        p_link:"https://www.github.com/"
    },
    {
        p_no:"02",
        p_name:"OCR Mobile App Data Scraper",
        p_img: project_img2,
        p_desc:"An automated data scraper that runs on a mobile emulator, navigates through apps, captures screenshots, enhances images for OCR recognition, and uploads the scraped data into a database for storage and analysis.",
        p_tech:"Python, Tesseract OCR, ADB (Android Debug Bridge), MySQL",
        has_link: false,
        p_moreinfo: "I've always enjoyed automating simple, repeatable tasks, and this project was a way for me to do just that. In this project, I developed a fully autonomous Python application to automate data scraping from mobile applications. The system uses a mobile emulator to open and interact with the target app, navigating through various screens to locate and collect data. The application uses PyAutoGUI for GUI automation, taking screenshots of the app's interface and applying image enhancement techniques for better optical character recognition (OCR) accuracy (such as inverting color, resizing, etc.). The core of the application uses the Tesseract OCR engine to extract data from the images, which is then uploaded into a structured database for storage and analysis. The process runs in a loop, continuously scrolling and searching for new data until all relevant information is captured or the task is stopped. This project uses automation techniques by using Python libraries such as Win32gui for window handling, and it incorporates error handling to ensure the process is robust and resilient to changes in the app's interface. It detects when there is an error, such as losing an internet connection or the application crashing. In that case, the place in which the data scraping was is also saved for later continuation.",
        p_moreimg: project_img2
    },
    {
        p_no:"03",
        p_name:"Cloud Instance Performance Analysis with Terraform",
        p_img: project_img3,
        p_desc:"A cloud-based benchmarking tool that deploys instances across AWS, Google Cloud, and Azure, runs performance tests, and analyzes the results to compare the cost-to-performance ratios of various cloud instances.",
        p_tech:"Terraform, AWS, Google Cloud, Azure, bash scripting",
        has_link: false,
        p_moreinfo: "This project involved creating a fully automated cloud benchmarking tool using Terraform, a powerful infrastructure-as-code tool. The purpose of this project was to test and analyze the performance-to-cost ratio of instances across three major cloud providers: AWS, Google Cloud, and Azure. The system deploys instances on each platform based on user-defined parameters(instance type, region, etc), then runs performance tests such as CPU benchmarking, memory stress tests, and storage throughput analysis. After each test is completed, the results are transferred back to the local system via SCP, where they are analyzed to compare the performance of different instance types. The data is then used to generate a performance-per-dollar metric, helping users identify which cloud provider offers the best value for different types of workloads",

    },
    {
        p_no:"04",
        p_name:"Static and Dynamic Malware and Botnet Analysis",
        p_img: project_img4,
        p_desc:"An educational project that dissects and analyzes historical ransomware (like Jigsaw) and botnet frameworks, exploring their functionality, encryption methods, and potential vulnerabilities through controlled live demonstrations.",
        p_tech:"Python, C++, IDA Pro, Wireshark, VirtualBox, Linux, Bash Scripting",
        has_link: false,
        p_moreinfo: "This project focused on understanding and analyzing the inner workings of malware, particularly ransomware, and botnets. Being able to understand exactly how malware works helps knowing how to create code that is safe. I started by conducting a thorough analysis of the Jigsaw ransomware, investigating its encryption methods and identifying how it locks users out of their files. For this part I was able to figuere out Jigsaw uses AES encryption on the files and changes the file type to .FUN. After completing the ransomware analysis, I moved on to the Covenant C2 botnet framework, which is used to deploy and manage botnets in real-world attack scenarios. I created a live demonstration of the botnet in action, deploying exploits from the C2 framework and using a controlled environment to simulate a ransomware attack. During this part I was able to learn many of the techniques used by attackers to transfer their payload into the victims system. The analysis included both static and dynamic techniques, examining how malware operates in memory and identifying methods for detection and mitigation. The goal of this project was to gain a deeper understanding of cybersecurity threats and demonstrate how easily malware can be deployed.",
    },
    {
        p_no:"05",
        p_name:"Unity 2D Game Development",
        p_img: project_img5,
        p_desc:"A 2D top down action-adventure game built in Unity, featuring custom animations, object pooling for performance, particle effects, and interactive gameplay mechanics that provide an immersive player experience.",
        p_tech:"Unity, C#, Blender,",
        has_link: false,
        p_moreinfo: "This project is a 2D top down action-adventure game inspired by titles like Vampire Survivors, built using Unity and C#. The game features has an interactive world where players battle against waves of enemies, unlock skills, and progress through levels filled with challenges and boss fights. I implemented advanced gameplay mechanics such as object pooling, which reuses game objects to improve performance (this improved memory consumption by over 60%) this was especially necessary since this game is based on having a high number of enemies in the screen at once. I also incorporated particle systems to create immersive visual effects like explosions and magical abilities, and dashing animations. The game also includes a shop system where players can buy upgrades for their weapons and characters, enhancing their abilities as they progress. Both the player and enemies have several animations like walking, running, use of abilities, death, and mutations, making it visually engaging and responsive. The development process involved extensive scripting in C# to manage the game's mechanics, AI behavior, and user input, as well as designing all of the assets and levels used in the game using tools such as blender an aseprite.",
    },
    {
        p_no:"06",
        p_name:"Dungeons and Dragons Character Creator",
        p_img: project_img6,
        p_desc:"An application that allows users to create and customize Dungeons and Dragons characters, with features that automatically calculate stats, abilities, and equipment based on user input and game rules.",
        p_tech:"Java, JavaFX, JSON, CSS",
        has_link: false,
    },
    {
        p_no:"07",
        p_name:"Text-based RPG Javascript Game",
        p_img: project_img7,
        p_desc:"Developed a text-based RPG game using JavaScript that challenges players to navigate a fantasy world, battle monsters, and complete quests. The game features a dynamic storyline, multiple endings, and interactive gameplay mechanics.",
        p_tech:"JavaScript, jQuery, HTML, CSS",
        has_link: true,
        p_link:"https://github.com/edgarf25/That-Dungeon-Game"
    },
    {

        p_no:"09",
        p_name:"2d/3d Immersive Maze Javascript Game",
        p_img: project_img8,
        p_desc:" Created an engaging game with both 2D and 3D elements using JavaScript. The game features custom graphics, animations, and interactive gameplay mechanics that challenge players to think strategically and react quickly.",
        p_tech:"JavaScript, HTML5 Canvas, jQuery, CSS",
        has_link: false,
        p_moreinfo: "This project is a 2D/3D maze game developed using JavaScript, HTML, jQuery, and CSS. The game dynamically generates random mazes by utilizing a collection of images, ensuring that no two playthroughs are alike. Each time the player enters a new level, a unique maze is created, challenging the player to navigate through increasingly complex environments. As the player progresses through the game, the difficulty ramps up with mazes that grow larger and more intricate, testing the player's problem-solving and navigation skills. The game incorporates smooth transitions between levels and provides a visually engaging experience through the use of 2D and 3D graphics, making it an exciting and dynamic challenge.",
    },
    {
        p_no:"08",
        p_name:"8-tile Puzzle Algorithmic Solver Website",
        p_img: project_img9,
        p_desc:"Created a website featuring an algorithmic solver for 8-tile puzzle games. Users can input their own puzzles and watch the solver find the optimal solution and the steps for the solution.",
        p_tech:"JavaScript, HTML, CSS",
        has_link: false,
        p_moreinfo: "This project is a web-based application designed to solve 8-tile puzzles using advanced algorithms. The website allows users to input their own puzzle configurations, and the algorithmic solver finds the optimal solution, displaying each step in the process. The solver uses search algorithms like A* to efficiently solve the puzzle, minimizing the number of moves required. The application also visually represents the solution steps, making it an interactive and educational tool for understanding how these algorithms work. The project focuses on providing a user-friendly experience while showcasing the power of algorithmic problem-solving in action.",
    }
]

export default Project_Data;